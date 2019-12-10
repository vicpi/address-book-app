import { 
    addUsers, addNextBatchOfUsers
} from 'actions'
import { put, call, select } from 'redux-saga/effects'
import { makeUsersUrl } from 'helpers'
import request from 'helpers/request'
import { pageSelector, seedSelector, nationalitiesSelector } from '../selectors'

export function* selectUserMetaInfo() {
    const nationalities = yield select(nationalitiesSelector)
    const currentPage = yield select(pageSelector)
    const seed = yield select(seedSelector)
    return { nationalities, currentPage, seed }
}

export function* fetchUsers({ nationalities, seed, page }) {
    const response = yield call(request.get, makeUsersUrl(nationalities, seed, page))
    const users = response.data.results
    const currentSeed = response.data.info.seed
    return { users, currentSeed }
}

export function* loadUsers(nationalities, seed, page) {
    const { users, currentSeed } = yield call(fetchUsers, {nationalities, seed, page})
    yield put(addUsers(users))
    return currentSeed
}

export function* prefetchUsers(nationalities, seed, page) {
    const { users } = yield call(fetchUsers, {nationalities, seed, page})
    yield put(addNextBatchOfUsers(users))
}
