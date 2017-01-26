export const initialState = {
  list: []
}

export const getList = (state = initialState) => {
  return state.posts.list || []
}

export const getPost = (state = { activePost: []}) => {
  return state.posts.activePost || []
}