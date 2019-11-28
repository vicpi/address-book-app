import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Modal', () => {
    it('should render div with modal class', () => {
        const wrapper = shallow(<Modal />)
        expect(wrapper.find('div.modal').length).toEqual(1)
    })
    
    it('should render header, body, and footer divs', () => {
        const wrapper = shallow(<Modal />)
        const modalDiv = wrapper.find('div.modal')
        expect(modalDiv.find('div.modal-header').length).toEqual(1)
        expect(modalDiv.find('div.modal-body').length).toEqual(1)
        expect(modalDiv.find('div.modal-footer').length).toEqual(1)
    })
    
    it('should render title and children', () => {
        const wrapper = shallow(<Modal title="Modal Title">Text</Modal>)
        const modalDiv = wrapper.find('div.modal')
        expect(modalDiv.find('h5.modal-title').text()).toEqual('Modal Title')
        expect(modalDiv.find('div.modal-body').text()).toEqual('Text')
    })
});