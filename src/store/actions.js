const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const POST_LIST = createRequestTypes('POST_LIST')
export const POST_CREATE = createRequestTypes('POST_CREATE')
export const POST_FETCH = createRequestTypes('POST_FETCH')

function action(type, payload = {}) {
  return {type, ...payload}
}

export const postList = {
  request: () => action(POST_LIST.REQUEST),
  success: (list) => action(POST_LIST.SUCCESS, { list }),
  failure: (error) => action(POST_LIST.FAILURE, { error })
}

export const postCreate = {
  request: (data, resolve, reject) => action(POST_CREATE.REQUEST, { data, resolve, reject }),
  success: (data) => action(POST_CREATE.SUCCESS, { data }),
  failure: (error) => action(POST_CREATE.FAILURE, { error })
}

export const postFetch = {
  request: (id) => action(POST_FETCH.REQUEST, id),
  success: (post) => action(POST_FETCH.SUCCESS, { post }),
  failure: (error) => action(POST_FETCH.FAILURE, { error })
}

export const sendMessage = (data) => action('server/sendMessage', { data })
