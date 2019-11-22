import { LOAD_INITIAL_USERS, SCROLL_AT_THE_BOTTOM_OF_THE_PAGE, addUsers, setSeed, setPage } from 'actions'
import { call, put, takeLeading, all, select } from 'redux-saga/effects'
import { makeUsersUrl, httpGet } from 'helpers'

function* loadInitialUsersSaga() {
    console.log('loadInitialUsersSaga');
    const nationalities = yield select(state => state.nationalities)
    console.log('nationalities', nationalities);
    
    const response = yield call(httpGet, makeUsersUrl(nationalities))
    const users = response.data.results
    const seed = response.data.info.seed
    yield put(addUsers(users))
    yield put(setSeed(seed))
    yield put(setPage(1))
}

function* addUsersSaga() {
    const nationalities = yield select(state => state.nationalities)
    const seed = yield select(state => state.seed)
    const currentPage = yield select(state => state.page)
    const nextPage = currentPage + 1
    console.log('addUsersSaga', seed, nextPage);
    const response = yield call(httpGet, makeUsersUrl(nationalities, seed, nextPage))
    const users = response.data.results
    yield put(addUsers(users))
    yield put(setPage(nextPage))
}

function* watchScrollAtTheBottomOfThePageSaga() {
    console.log('watchScrollAtTheBottomOfThePageSaga');
    
    yield takeLeading(SCROLL_AT_THE_BOTTOM_OF_THE_PAGE, addUsersSaga)
}

function* watchLoadInitialUsersSaga() {
    console.log('watchLoadInitialUsersSaga');
    
    yield takeLeading(LOAD_INITIAL_USERS, loadInitialUsersSaga)
}

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchScrollAtTheBottomOfThePageSaga()
    ])
}