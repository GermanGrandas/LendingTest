import React from 'react';
import {shallow} from 'enzyme'
import { MainComponent } from "../components/MainComponent"




describe('<MainComponent /> component test', () => {
    test('render main window esqueleton', () => {
        const wrapper = shallow(<MainComponent />)

        expect(wrapper).toMatchSnapshot();
    })
    
})
