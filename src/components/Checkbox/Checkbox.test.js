import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
    it('should render without errors', () => {
        const fn = jest.fn()
        shallow(<Checkbox name="ch" label="CH" checked={true} onChange={fn} />)
    })
    
    it('should render without errors', () => {
        const fn = jest.fn()
        const wrapper = shallow(
            <Checkbox name="ch" label="CH" checked={true} onChange={fn} />
        )
        expect(wrapper.find('label').text()).toEqual('CH')
        // expect(wrapper.find('input').attr('checked')).toEqual(tru
    })

    it('should invoke onChange handler when clicked', () => {
        const fn = jest.fn()
        const wrapper = mount(
            <Checkbox name="ch" label="CH" checked={false} onChange={fn} />
        )
        const inputElement = wrapper.find('input')
        // TODO: access e.target from Jest tests
        inputElement.simulate('change')
        expect(fn.mock.calls.length).toEqual(1)
        inputElement.simulate('change')
        console.log(fn.mock.calls);
        
        expect(fn.mock.calls.length).toEqual(2)
        expect(fn.mock.calls[0]).toEqual([ 'ch', 'CH', false ])
    })
});