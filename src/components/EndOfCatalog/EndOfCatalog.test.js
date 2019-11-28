import React from 'react';
import { shallow } from 'enzyme';
import EndOfCatalog from './EndOfCatalog';

describe('EndOfCatalog', () => {
    it('should render 2 NavLink elements', () => {
        const wrapper = shallow(<EndOfCatalog />)
        expect(
            wrapper.find('p.end-catalog').text()
        ).toEqual('End of users catalog')
    })
});