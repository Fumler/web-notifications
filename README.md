# web-notifications
Website that lets an admin send a message to all its users. Minimum viable product-ish.

```sh
yarn # install deps
yarn run client # run webpack-dev-server for client side
yarn run server # run node api server
```

## WANTED FEATURES

- [ ] Push API - service workers (https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [x] Backup solution for sending notifications to all users with socket.io
- [x] Refresh homepage when notification is sent to all users
- [x] Add article posts
- [ ] Edit article posts (implemented in server only)
- [ ] Delete article posts (implemented in server only)
- [ ] More detailed PostDetail page
- [ ] Full-screen "hero" article on homepage
- [ ] Markdown editor for creating article posts
- [ ] Login flow with protected routes
- [ ] Server-side rendering

## TECH

- [x] Routing with react-router (https://github.com/ReactTraining/react-router)
- [x] Redux state management (https://github.com/reactjs/redux)
- [x] Routing synced with redux store (https://github.com/reactjs/react-router-redux)
- [x] React front-end with styled-components css (https://styled-components.com/ , https://facebook.github.io/react/)
- [x] Atomic Design project structure (http://bradfrost.com/blog/post/atomic-web-design/)
- [x] Manage form state with redux-form (http://redux-form.com/6.4.3/)
- [x] Send and recieve redux actions to and from server (https://github.com/itaylor/redux-socket.io)
- [x] Handle async actions with redux sagas instead of thunk (https://redux-saga.github.io/redux-saga/)

## ISSUES

- [x] Fix issue where createPost promise never completes so createPost form doesn't have to be reset every time