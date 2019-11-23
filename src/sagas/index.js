import { all } from 'redux-saga/effects'
import { watchLoadInitialUsersSaga, watchLoadNextUsersSaga } from 'sagas/watcherSagas'

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchLoadNextUsersSaga()
    ])
}