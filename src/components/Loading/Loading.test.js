import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading.js';

describe('Loading', () => {
    it('should render div with loading-container class', () => {
        const wrapper = shallow(<Loading />)
        expect(
            wrapper.find('div.loading-container').length
        ).toEqual(1)
    })
    
    it('should render div with loading class', () => {
        const wrapper = shallow(<Loading />)
        expect(
            wrapper.find('div.loading').length
        ).toEqual(1)
    })
    
    it('should render span', () => {
        const wrapper = shallow(<Loading />)
        expect(
            wrapper.find('div.loading').find('span').length
        ).toEqual(1)
    })
});