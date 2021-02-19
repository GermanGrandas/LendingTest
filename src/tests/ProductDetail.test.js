import React from 'react';
import {shallow} from 'enzyme'
import ProductDetail from "../components/ProductDetail"




describe('<ProductDetail /> component test', () => {
    test('render products list component', () => {
        const product= "1"
        const wrapper = shallow(<ProductDetail product={product}/>)

        // expect(wrapper).toMatchSnapshot();
    })
    
})
