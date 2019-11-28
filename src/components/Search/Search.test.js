import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'
import { filterUsers } from 'actions'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => {
    const exampleUser = require('mocks/exampleUser').default
    const useSelectorMock = jest.fn()
    useSelectorMock
        .mockReturnValue([ exampleUser ])
    return {
        useDispatch: () => mockDispatch,
        useSelector: useSelectorMock
    }
})
    
describe('Search', () => {
    it('should render div with users-table class', () => {
        const wrapper = shallow(<Search />)
        expect(wrapper.find('.search-users-input').length).toEqual(1)
    })

    it('should dispatch filterUsers action when changed', () => {
        const wrapper = shallow(<Search />)
        const input = wrapper.find('.search-users-input')
        const testValue = 'Hello World'
        input.simulate('change', { target: { value: testValue } })
        const args = mockDispatch.mock.calls[0]
        expect(args[0]).toEqual(filterUsers(testValue))
    })
})