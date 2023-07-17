import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';

function* changeLabel(e) {
    console.log('Change Label called', e)
  }

export default function* createSaga () {
  const response = yield call(axios.get, 'https://emojihub.yurace.pro/api/all')
  console.log(response.data)
  const filteredObjects=[];
  response.data.map((obj, key) => {
    if (filteredObjects.includes(obj.category)==false) {
      filteredObjects.push(obj.category)
    }
  }, {});
  yield put({type: "FETCH_DETAIL", payload: {response: response.data, category : filteredObjects}})
  yield takeLatest("LABEL_CHANGE", changeLabel);
}