import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_NOTE} from "../actions/notes";


export function* sagaWatcher(){
   yield takeEvery(ADD_NOTE,sagaWorker)
}

function* sagaWorker(){
    const payload = yield call(ADD_NOTE)
    yield put({type:ADD_NOTE,payload})
    console.log(payload)
}
console.log(sagaWatcher)