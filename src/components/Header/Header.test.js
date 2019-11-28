import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('should render 2 NavLink elements', () => {
        const wrapper = shallow(<Header />)
    })

    it('should render without search', () => {
        shallow(<Header showSearch={false} />)
    })
    
    it('should render with search', () => {
        shallow(<Header showSearch={true} />)
    })    
});