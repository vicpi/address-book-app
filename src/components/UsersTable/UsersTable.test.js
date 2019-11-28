import React from 'react'
import { shallow } from 'enzyme'
import UsersTable from './UsersTable'

jest.mock('react-redux', () => {
    const exampleUser = require('mocks/exampleUser').default
    const useSelectorMock = jest.fn(() => {
        return [ exampleUser ]
    })
    return {
        useDispatch: () => {},
        useSelector: useSelectorMock
    }
})
    
describe('UsersTable', () => {
    it('should render div with users-table class', () => {
        const wrapper = shallow(<UsersTable />)
        expect(wrapper.find('table.users-table').length).toEqual(1)
    })

    it('should render UserRow React element', () => {
        const wrapper = shallow(<UsersTable />)
        expect(wrapper.find('UserRow').length).toEqual(1)
    })
})