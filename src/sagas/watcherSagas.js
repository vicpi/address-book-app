import { buffers } from 'redux-saga'
import { 
    LOAD_INITIAL_USERS, SCROLL_TO_THE_BOTTOM_OF_THE_PAGE, 
    addUsers, setSeed, setPage, loadInitialUsers,
    startLoadingUsers, finishLoadingUsers
} from 'actions'
import { UPDATE_NATIONALITY_SETTINGS, setNationalitySettings } from 'actions/settings'
import { take, put, call, select, delay, actionChannel } from 'redux-saga/effects'
import { selectUserMetaInfo, loadUsers, prefetchUsers } from './usersSagas'
import { nextBatchSelector, allUsersSelector, maxCatalogLengthSelector } from '../selectors'

export function* watchLoadNextUsersSaga() {
    const scrollChannel = yield actionChannel(
        SCROLL_TO_THE_BOTTOM_OF_THE_PAGE,
        buffers.sliding(1)
    )
    while (true) {
        yield take(scrollChannel)
        const { nationalities, currentPage, seed } = yield call(selectUserMetaInfo)
        let nextPageOfUsers = []
        while (nextPageOfUsers.length === 0) {
            nextPageOfUsers = yield select(nextBatchSelector)
            yield delay(500)
        }
        yield put(addUsers(nextPageOfUsers))
        yield put(setPage(currentPage + 1))
        const allUsers = yield select(allUsersSelector)
        const usersCount = allUsers.length
        const maxCatalogLength = yield select(maxCatalogLengthSelector)
        
        if (usersCount < maxCatalogLength) {
            yield put(startLoadingUsers())
            yield call(prefetchUsers, nationalities, seed, currentPage + 2)
            yield put(finishLoadingUsers())
        }
    }
}

export function* watchLoadInitialUsersSaga() {
    while (true) {
        yield take(LOAD_INITIAL_USERS)
        const { nationalities } = yield call(selectUserMetaInfo)
        yield put(startLoadingUsers())
        const seed = yield call(loadUsers, nationalities, undefined, 1)
        yield put(setPage(1))
        yield put(setSeed(seed))
        yield call(prefetchUsers, nationalities, seed, 2)
        yield put(finishLoadingUsers())
    }
}

export function* watchUpdateNationalitySettingsSaga() {
    while (true) {
        const action = yield take(UPDATE_NATIONALITY_SETTINGS)
        yield put(setNationalitySettings(action.nationalityName, action.nationalityLabel, action.checked))
        yield put(loadInitialUsers())
    }
}