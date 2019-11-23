import { 
    LOAD_INITIAL_USERS, SCROLL_TO_THE_BOTTOM_OF_THE_PAGE, 
    addUsers, setSeed, setPage, 
    startLoadingUsers, finishLoadingUsers
} from 'actions'
import { call, take, put, takeLeading, all, select } from 'redux-saga/effects'
import { makeUsersUrl } from 'helpers'
import request from 'helpers/request'

function* selectUserMetaInfo() {
    const nationalities = yield select(state => state.nationalities)
    const currentPage = yield select(state => state.page)
    const seed = yield select(state => state.seed)
    return { nationalities, currentPage, seed }
}

function* loadUsers({ nationalities, seed, currentPage }) {
    yield put(startLoadingUsers())
    const nextPage = currentPage + 1
    const response = yield call(request.get, makeUsersUrl(nationalities, seed, nextPage))
    const users = response.data.results
    yield put(addUsers(users))
    yield put(setPage(nextPage))

    if (seed === undefined) {
        const seed = response.data.info.seed
        yield put(setSeed(seed))
    }
    
    yield put(finishLoadingUsers())
}

function* watchLoadNextUsersSaga() {
    while (true) {
        yield take(SCROLL_TO_THE_BOTTOM_OF_THE_PAGE)
        const { nationalities, currentPage, seed } = yield call(selectUserMetaInfo)
        yield call(loadUsers, {nationalities, seed, currentPage})
    }
}

function* watchLoadInitialUsersSaga() {
    while (true) {
        yield take(LOAD_INITIAL_USERS)
        const { nationalities, currentPage, seed } = yield call(selectUserMetaInfo)
        yield call(loadUsers, {nationalities, seed, currentPage})
    }
}

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchLoadNextUsersSaga()
    ])
}