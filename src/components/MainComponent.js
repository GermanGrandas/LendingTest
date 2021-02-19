import React, {useState,useEffect} from 'react'
import { Button, Grid,Header,Icon,Segment } from 'semantic-ui-react'
import axios from 'axios';

import ProductDetail from './ProductDetail';
import ProductsList from './ProductsList';

// import { data_products } from "../staticInfo";

export const MainComponent = () => {
    const [information, setInformation] = useState([])
    const [currentProduct, setCurrentProduct] = useState("")

    useEffect(() => {
        axios.post(
            "https://demo7555831.mockable.io/get_products_by_id",{user_id : ""}
        ).then(
            ({data}) => {
                let {information} = data
                setInformation(information)
            }
        ).catch(console.error)
    }, [])
    
    const getInvestor = productId =>{
        setCurrentProduct(productId)
    }
    return (
        <Segment attached="top" style={{ padding : "0 0", height : "100%"}}>
            <Grid columns={2} doubling stretched style={{margin : "0 0",marginLeft : "0 !important", height : "100%"}}>
                <Grid.Column width={5} style={{ height : "100%",padding : "0 0"}}>
                    <div className="ui left aligned card_header">
                        <Header as="h4" content="Select a product to syndicate" style={{margin : "0.5em 2em"}}/>
                    </div>
                    <div style={{overflowY : "scroll",minHeight : "48vh"}}>
                        <ProductsList products={information} getInvestor={getInvestor} selected={currentProduct}/>
                    </div>
                    
                    <Segment textAlign="center" className="card_button">
                        <Grid columns={2}>
                            <Grid.Column>
                                <Button color='teal' size="medium" style={{borderRadius : "15px", width : "160px"}}>
                                    <Icon name="close" /> Close
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button size='medium' 
                                    style={{ borderRadius : "15px", width : "160px", 
                                             background :"white" , color :"teal",
                                             border : "1px solid rgba(228, 228, 228,0.6)"}}>
                                    <Icon name="save" /> Sell
                                </Button>
                            </Grid.Column>
                        </Grid>
                        
                        
                    </Segment>
                    
                </Grid.Column>
                <Grid.Column width={11} style={{padding : "0"}}>
                    <ProductDetail product={currentProduct}/>
                </Grid.Column>
            </Grid>
        </Segment>
        
    )
}
