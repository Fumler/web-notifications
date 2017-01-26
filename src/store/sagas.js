import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import axios from 'axios'

const { postList, postCreate, postFetch } = actions

export function* createPost(newData, resolve, reject) {
  try {
    const { data } = yield call(axios.post, '/api/articles', newData)
    yield put(postCreate.success(data))
    yield call(resolve)
  } catch (e) {
    yield put(postCreate.failure(e))
    yield call(reject)
  }
}

export function* listPosts() {
  try {
    const { data } = yield call(axios.get, '/api/articles')
    yield put(postList.success(data))
  } catch (e) {
    yield put(postList.failure(e))
  }
}

export function* fetchPost(id) {
  try { 
    const { data } = yield call(axios.get, '/api/articles/' + id)
    yield put(postFetch.success(data))
  } catch (e) {
    yield put(postFetch.failure(e))
  }
}


export function* watchPostCreateRequest() {
  while (true) {
    const { data, resolve, reject } = yield take(actions.POST_CREATE.REQUEST)
    yield call(createPost, data, resolve, reject)
  }
}

export function* watchPostListRequest() {
  while (true) {
    yield take(actions.POST_LIST.REQUEST)
    yield call(listPosts)
  }
}

export function* watchPostFetchRequest() {
  while (true) {
    const { id } = yield take(actions.POST_FETCH.REQUEST)
    yield call(fetchPost, id)
  }
}

export default function* () {
  yield fork(watchPostCreateRequest)
  yield fork(watchPostListRequest)
  yield fork(watchPostFetchRequest)
}