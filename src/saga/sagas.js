import { put, takeEvery, call } from 'redux-saga/effects'
import { jobDataReceived, JOB_DATA_REQUEST } from './Actions'
import { requestTempJobs } from './request'

function* handler() {
    // yield takeEvery('JOB_DATA_REQUEST', sendJobRequestAPIcall)
    yield takeEvery(JOB_DATA_REQUEST, sendJobRequestAPIcall)
}


function* sendJobRequestAPIcall() {
    try {
        const response = yield requestTempJobs()

        yield put(jobDataReceived(response))

    } catch (err) {
        console.log(err);
    }

}

export { handler }