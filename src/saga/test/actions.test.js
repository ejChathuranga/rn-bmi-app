/* describe, it, expect */
import * as actions from '../Actions'

describe('jobDataReceived return actions' , ()=>{
    it('handles a object', ()=>{
        expect(actions.jobDataReceived({'name': 'EJ Chathuranga'})).toMatchSnapshot()
    })
    it('handles a empty object', ()=>{
        expect(actions.jobDataReceived({})).toMatchSnapshot()
    })
    it('handles a object contains empty value', ()=>{
        expect(actions.jobDataReceived({'name': ''})).toMatchSnapshot()
    })
    it('handles a object contains empty value and key', ()=>{
        expect(actions.jobDataReceived({'': ''})).toMatchSnapshot()
    })
})
