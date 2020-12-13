import store from '../store';

export const authGuard = (to, from, next) => {
  const token = store.hasAccessToken()
  if (!token) {
    return next({ path: '/login' })
  } else {
    return next();
  }
};