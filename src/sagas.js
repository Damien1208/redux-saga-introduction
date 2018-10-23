import { takeLatest, call, put, take } from 'redux-saga/effects';

// Wrapper for `fetch`
async function request(url) {
  const response = await fetch(url);
  return response.json();
}

function* fetchPlanets() {
  // Fetch the first few planets (asynchronous)
  // ⏸️ Pause until the promise resolves
  var response = yield call(request, 'https://swapi.co/api/planets');

  // Put them into the store
  yield put({ type: 'FETCH_PLANETS_SUCCESS', payload: response.results });

  // The Star Wars API uses pagination
  // `response.next` is the URL of the next batch of planets
  while (response.next) {
    // ⏸️ Pause until we see an action with type FETCH_MORE_PLANETS
    yield take('FETCH_MORE_PLANETS');

    // Fetch more planets! 🌎 🌍 🌏
    // ⏸️ Pause until the promise resolves
    response = yield call(request, response.next);

    // Add them to the store
    yield put({ type: 'FETCH_PLANETS_SUCCESS', payload: response.results });
  }
}

function* planetSaga() {
  yield takeLatest('FETCH_PLANETS_START', fetchPlanets);
}

export default planetSaga;
