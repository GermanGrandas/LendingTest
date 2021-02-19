import React from 'react';
import {shallow} from 'enzyme'
import ProductsList from "../components/ProductsList"

describe('<ProductsList /> component test', () => {
    //Old way
    // test('render products list', () => {
    //     const products = []
        
    //     const wrapper = render( <ProductsList products={products}/>)
    // })
    test('render products list component', () => {
        const information = []
        const wrapper = shallow(<ProductsList products={information}/>)

        // expect(wrapper).toMatchSnapshot();
    })
    
})
