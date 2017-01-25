export const initialState = {
  list: []
}

export const getList = (state = initialState) => {
  return state.posts.list || []
}