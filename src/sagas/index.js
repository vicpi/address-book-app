import { 
    LOAD_INITIAL_USERS, SCROLL_TO_THE_BOTTOM_OF_THE_PAGE, 
    addUsers, addUsersToNextPage, setSeed, setPage, 
    startLoadingUsers, finishLoadingUsers
} from 'actions'
import { take, put, call, all, select, delay } from 'redux-saga/effects'
import { makeUsersUrl } from 'helpers'
import request from 'helpers/request'

function* selectUserMetaInfo() {
    const nationalities = yield select(state => state.nationalities)
    const currentPage = yield select(state => state.page)
    const seed = yield select(state => state.seed)
    return { nationalities, currentPage, seed }
}

function* fetchUsers({ nationalities, seed, page }) {
    const response = yield call(request.get, makeUsersUrl(nationalities, seed, page))
    const users = response.data.results
    const currentSeed = response.data.info.seed
    return { users, currentSeed }
}

function* loadUsers(nationalities, seed, page) {
    const { users, currentSeed } = yield call(fetchUsers, {nationalities, seed, page})
    yield put(addUsers(users))
    return currentSeed
}

function* prefetchUsers(nationalities, seed, page) {
    const { users } = yield call(fetchUsers, {nationalities, seed, page})
    yield put(addUsersToNextPage(users))
}

function* watchLoadNextUsersSaga() {
    while (true) {
        yield take(SCROLL_TO_THE_BOTTOM_OF_THE_PAGE)
        const { nationalities, currentPage, seed } = yield call(selectUserMetaInfo)
        let nextPageOfUsers = []
        while (nextPageOfUsers.length === 0) {
            nextPageOfUsers = yield select(state => state.nextPage)
            yield delay(500)
        }
        yield put(addUsers(nextPageOfUsers))
        yield put(setPage(currentPage + 1))
        yield put(startLoadingUsers())
        yield call(prefetchUsers, nationalities, seed, currentPage + 2)
        yield put(finishLoadingUsers())
    }
}

function* watchLoadInitialUsersSaga() {
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

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchLoadNextUsersSaga()
    ])
}