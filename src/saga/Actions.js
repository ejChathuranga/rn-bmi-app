const ADD_TEST_VALUE = 'ADD_TEST_VALUE'
const JOB_DATA_REQUEST = 'JOB_DATA_REQUEST'
const JOB_DATA_RECEIVED = 'JOB_DATA_RECEIVED'
const JOB_DATA_PROCESSING = 'JOB_DATA_PROCESSING'

const addTestValue = action => ({
    type: ADD_TEST_VALUE,
    payload: action
})

const jobsRequestSend = () => ({
    type: JOB_DATA_REQUEST
})

const jobDataReceived = jobs => ({
    type: JOB_DATA_RECEIVED,
    payload: jobs
})

const jobDataProcessing = process_state => ({
    type: JOB_DATA_PROCESSING,
    payload: process_state
})


export {
    ADD_TEST_VALUE,
    JOB_DATA_REQUEST,
    JOB_DATA_RECEIVED, 
    JOB_DATA_PROCESSING,
    addTestValue,
    jobsRequestSend,
    jobDataReceived,
    jobDataProcessing
}