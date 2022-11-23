import { put, takeEvery } from 'redux-saga/effects'
import { fetchDishesAxios } from './ActionCreators';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchDishes(action) {
      yield put(fetchDishesAxios());
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
  yield takeEvery("DISHES_FETCH", fetchDishes);
}