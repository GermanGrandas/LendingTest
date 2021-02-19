import React from 'react';
import {shallow} from 'enzyme'
import {HeaderComponent} from "../components/Header";

describe('<Header /> component test', () => {
    //Old way
    // test('render products list', () => {
    //     const products = []
        
    //     const wrapper = render( <ProductsList products={products}/>)
    // })
    test('Header Snapshot', () => {
        
        const wrapper = shallow(<HeaderComponent />)

        expect(wrapper).toMatchSnapshot();
    })
    
})