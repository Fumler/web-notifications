import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import axios from 'axios'

const { postList, postCreate } = actions

export function* createPost(newData) {
  try {
    const { data } = yield call(axios.post, '/api/articles', newData)
    yield put(postCreate.success(data))
  } catch (e) {
    yield put(postCreate.failure(e))
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

export function* watchPostCreateRequest() {
  while (true) {
    const { data } = yield take(actions.POST_CREATE.REQUEST)
    yield call(createPost, data)
  }
}

export function* watchPostListRequest() {
  while (true) {
    yield take(actions.POST_LIST.REQUEST)
    yield call(listPosts)
  }
}

export default function* () {
  yield fork(watchPostCreateRequest)
  yield fork(watchPostListRequest)
}