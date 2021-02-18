import React, { useRef,useState } from 'react'
import { Grid, Header, Item } from 'semantic-ui-react'

const ItemDetail = ({product, getInvestor}) =>{ 
    const {amount,date,product_id} = product

    const productId = useRef(product_id);
    const [itemRef, setRef] = useState(false);

    const new_date = new Date(date);
    const month = new_date.getMonth() + 1
    const day = new_date.getDate();
    const year = new_date.getFullYear();
    const string_date = `${day}/${month}/${year}`
    const amount_str = `$${amount}`

    const enter = e=> {setRef(true)}
    const leave = e => {setRef(false)}
    
    return (
        <Item className="ui inverted segment item_class" style={{margin : "0 0"}} onMouseOver={enter} onMouseOut={leave} onClick={() => getInvestor(productId.current)}>
            <Item.Content>
            <Item.Header style={{width : "100%"}}>
                <Grid verticalAlign="middle" style={{maxWidth: "100%",margin: "0", padding:"1.4em"}}>
                    <Grid.Row columns={2} style={{padding:"0"}}>
                        <Grid.Column textAlign="left" width={10}>
                            <Grid.Row>
                                <Header as="h6" content="Product ID" inverted={itemRef ? true : false}/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h2" content={product_id} inverted={itemRef ? true : false}/>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column textAlign="right" width={6}>
                            <Grid.Row>
                                <Header as="h5" content="Advance" color={itemRef ? "black" : "teal"} inverted={itemRef ? true : false}/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header as="h6" content={string_date} inverted={itemRef ? true : false}/>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row columns={1} style={{padding:"0"}}>
                        <Grid.Column>
                            <Header as="h2" content={amount_str} textAlign="right" inverted={itemRef ? true : false}/>
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </Item.Header>
        </Item.Content>
        </Item>
    )
}

export const ProductsList = ({products,getInvestor}) => {
    
    return (
        <Item.Group>
            {
                products.map(product => {
                return (<ItemDetail key={product.product_id} product={product} getInvestor={getInvestor}/>)
            })
            }
        </Item.Group>
    )
}
