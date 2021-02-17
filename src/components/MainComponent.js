import React from 'react'
import { Button, Container, Grid,Header,Icon,Segment } from 'semantic-ui-react'
import { useAPI } from '../hooks/useApi';
import { ProductDetail } from './ProductDetail';
import { ProductsList } from './ProductsList';

import { investor_products,data_products } from "../staticInfo";

export const MainComponent = () => {
    // const {  data   } = useAPI("https://demo7555831.mockable.io/get_products_by_id",{user_id : ""});
    // const {information} = data
    // console.log(data);
    const {information} = data_products
    // const information = []
    return (
        <Segment fluid attached="top" style={{ padding : "0 0", height : "100%"}}>
            <Grid columns={2} doubling stretched style={{margin : "0 0",marginLeft : "0 !important", height : "100%"}}>
                <Grid.Column width={5} style={{ height : "100%",padding : "0 0"}}>
                    <div className="ui left aligned card_header">
                        <Header as="h4" content="Select a product to syndicate" style={{margin : "0.5em 2em"}}/>
                    </div>
                    <div style={{overflowY : "scroll",minHeight : "48vh"}}>
                        <ProductsList products={information} />
                    </div>
                    
                    <Segment textAlign="center" className="card_button">
                        <Grid columns={2}>
                            <Grid.Column>
                                <Button color='teal' size='large' style={{borderRadius : "15px", width : "160px"}}>
                                    <Icon name="close" /> Close
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button size='large' 
                                    style={{ borderRadius : "15px", width : "160px", 
                                             background :"white" , color :"teal",
                                             border : "1px solid rgba(228, 228, 228,0.6)"}}>
                                    <Icon name="save" /> Sell
                                </Button>
                            </Grid.Column>
                        </Grid>
                        
                        
                    </Segment>
                    
                </Grid.Column>
                <Grid.Column width={11}>
                    <ProductDetail/>
                </Grid.Column>
            </Grid>
        </Segment>
        
    )
}
