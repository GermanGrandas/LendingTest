import React from 'react';
import {shallow} from 'enzyme'
import {Layout} from "../components/Layout";

describe('<Layout /> component test', () => {
    test('Layout Snapshot', () => {
        
        const wrapper = shallow(<Layout />)

        expect(wrapper).toMatchSnapshot();
    })
    
})