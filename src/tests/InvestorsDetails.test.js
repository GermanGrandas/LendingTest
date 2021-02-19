import React from 'react';
import {shallow} from 'enzyme'
import {InvestorsDetails,EditView} from "../components/InvestorsDetails";

// describe('<InvestorsDetails /> component test', () => {
//     const information = []
//     const wrapper = shallow(<InvestorsDetails investors={information}/>)

//     test('InvestorsDetails Snapshot', () => {
//         // wrapper.instance().setSetEditView(true)
//         // expect(wrapper).toMatchSnapshot();
//     })
// })

describe('<EditView /> component tests', () => {
    const investors = [{
        "id": "1",
        "investor_name": "Hand, Stamm and Kreiger",
        "sold": "366.47",
        "purchased": 35,
        "left_amount": "390.54",
        "remaining": 95
      },
      {
        "id": "2",
        "investor_name": "Wolff LLC",
        "sold": "896.95",
        "purchased": 51,
        "left_amount": "95.18",
        "remaining": 63
      }]
    const investor = [{
        "id": "1",
        "investor_name": "Hand, Stamm and Kreiger",
        "sold": "366.47",
        "purchased": 35,
        "left_amount": "390.54",
        "remaining": 95
      },]
    const investors_names = investors.map(({investor_name} )=> ({
        key:investor_name,
        value: investor_name,
        text: investor_name,
      }))
    const finishEdit = investor =>{
        console.log(investor);
    }

    const wrapper = shallow(<EditView investors={investors_names} investor_info={investor} finishEdit={finishEdit}/>)
    test('Edit View snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    });
    // test('the sold field should change',()=>{
    //     const input = wrapper.find('input[type="sold"]')
    //     const value = 378297
    //     input.simulate('change',{target : {value}})
    //     // console.log(input);
    // })
})
