import { LOAD_INITIAL_USERS, SCROLL_AT_THE_BOTTOM_OF_THE_PAGE, addUsers } from 'actions'
import { call, put, takeLeading, all } from 'redux-saga/effects'
import axios from 'axios'

function* addUsersSaga() {
    console.log('addUsersSaga');
    const response = yield call(axios.get, `https://randomuser.me/api/?nat=ch,es,fr,gb&results=50&inc=name,location,nat,email,picture,phone,cell,login`)
    const users = response.data.results
    yield put(addUsers(users))
}

function* watchScrollAtTheBottomOfThePageSaga() {
    console.log('watchScrollAtTheBottomOfThePageSaga');
    
    yield takeLeading(SCROLL_AT_THE_BOTTOM_OF_THE_PAGE, addUsersSaga)
}

function* watchLoadInitialUsersSaga() {
    console.log('watchLoadInitialUsersSaga');
    
    yield takeLeading(LOAD_INITIAL_USERS, addUsersSaga)
}

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchScrollAtTheBottomOfThePageSaga()
    ])
}