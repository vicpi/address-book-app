import { 
    LOAD_INITIAL_USERS, SCROLL_TO_THE_BOTTOM_OF_THE_PAGE, 
    addUsers, setSeed, setPage, 
    startLoadingUsers, finishLoadingUsers
} from 'actions'
import { take, put, call, select, delay } from 'redux-saga/effects'
import { selectUserMetaInfo, loadUsers, prefetchUsers } from 'sagas/usersSagas'

export function* watchLoadNextUsersSaga() {
    while (true) {
        yield take(SCROLL_TO_THE_BOTTOM_OF_THE_PAGE)
        const { nationalities, currentPage, seed } = yield call(selectUserMetaInfo)
        let nextPageOfUsers = []
        while (nextPageOfUsers.length === 0) {
            nextPageOfUsers = yield select(state => state.nextBatchOfUsers)
            yield delay(500)
        }
        yield put(addUsers(nextPageOfUsers))
        yield put(setPage(currentPage + 1))
        const usersCount = yield select(state => state.allUsers.length)
        const maxUsersCount = yield select(state => state.maxUsersCount)
        
        if (usersCount < maxUsersCount) {
            yield put(startLoadingUsers())
            yield call(prefetchUsers, nationalities, seed, currentPage + 2)
            yield put(finishLoadingUsers())
        }
    }
}

export function* watchLoadInitialUsersSaga() {
    while (true) {
        yield take(LOAD_INITIAL_USERS)
        const { nationalities, currentPage } = yield call(selectUserMetaInfo)
        yield put(startLoadingUsers())
        const seed = yield call(loadUsers, nationalities, seed, currentPage + 1)
        yield put(setPage(currentPage + 1))
        yield put(setSeed(seed))
        yield call(prefetchUsers, nationalities, seed, currentPage + 2)
        yield put(finishLoadingUsers())
    }
}