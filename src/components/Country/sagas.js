import { delay } from "redux-saga"
import { takeEvery, call, put } from "redux-saga/effects"
import {
    REQUEST_COUNTRY,
    RECEIVE_COUNTRY
} from "../../action/types"

// '../../constants/constants';
import "isomorphic-fetch"

function* getPropertyDetail(action) {
    console.log("getPropertyDetail api called ==>>", action)
    try {
        const response = yield call(fetch, "https://devapi.biproxi.com/v1/listing?listing_id=" + action.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.status === 200) {
            const data = yield response.json()
            console.log("data==>>>>", data)
            yield put({ type: RECEIVE_COUNTRY, payload: data.data })
        }
        else {
            throw { message: "Error in fetching most viewed property. Try again." }
        }
    }
    catch (error) {
        console.log("HomePage most viewed listing error", error)
    }
}

export default function* propertySagas() {
    yield takeEvery(REQUEST_COUNTRY, getPropertyDetail)
}