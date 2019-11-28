import React from 'react';
import { shallow } from 'enzyme';
import UserRow from './UserRow';
import exampleUser from 'mocks/exampleUser'

jest.mock('react-redux', () => ({
    useDispatch: () => {}
}));



describe('UserRow', () => {
    it('should render div with loading-container class', () => {
        const wrapper = shallow(<UserRow user={exampleUser} />)
        expect(wrapper.find('tr.user-row').length).toEqual(1)
    })
    it('should render <img> tag', () => {
        const wrapper = shallow(<UserRow user={exampleUser} />)
        expect(wrapper.find('img').length).toEqual(1)
    })
    it('should render 5 columns', () => {
        const wrapper = shallow(<UserRow user={exampleUser} />)
        expect(wrapper.find('td').length).toEqual(5)
    })
});

