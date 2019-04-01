import { takeEvery, call, all } from "redux-saga/effects"
import propertySagas from "./components/Country/sagas"

// "../HomePage/sagas/HomePageSagas"


export default function* rootSaga() {
    yield all([
        call(propertySagas),
    ])
}