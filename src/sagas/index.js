import { all } from 'redux-saga/effects'
import {
    watchLoadInitialUsersSaga,
    watchLoadNextUsersSaga,
    watchUpdateNationalitySettingsSaga
} from 'sagas/watcherSagas'

export default function* rootSaga() {
    yield all([
        watchLoadInitialUsersSaga(),
        watchLoadNextUsersSaga(),
        watchUpdateNationalitySettingsSaga()
    ])
}