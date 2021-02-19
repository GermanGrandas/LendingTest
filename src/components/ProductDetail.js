import React, {useState,useEffect} from 'react'
import { Grid, Header, Progress } from 'semantic-ui-react'
import axios from 'axios';
import { InvestorsDetails } from './investorsDetails';

const ProductDetail = ({product}) => {
    const [information, setInformation] = useState([])
    useEffect(() => {
        axios.post(
            "https://demo7555831.mockable.io/get_investors_by_id",{product_id : product}
        ).then(
            ({data}) => {
                let {information} = data
                setInformation(information)
            }
        ).catch(console.error)
    }, [product])
    return (
        <Grid columns={1}>
            <Grid.Column>
                <Grid.Row className="investors_space">
                    <Grid.Row style={{margin: "0.3em 1em",}}>
                        <Header as="h4" content={`Product ID ${product}`} 
                            inverted className="border_header"/>
                    </Grid.Row>
                    <Grid.Row style={{marginTop: "1.3em"}} >
                        <Grid verticalAlign="middle">
                            <Grid.Row columns={4} textAlign="center">
                                <Grid.Column width={5}><Header as="h5" content="Investor Name" inverted/></Grid.Column>
                                <Grid.Column width={4}> <Header as="h5" content="Sold" inverted/></Grid.Column>
                                <Grid.Column width={4}><Header as="h5" content="% Purchased" inverted/></Grid.Column>
                                <Grid.Column width={3}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                </Grid.Row>
                <Grid.Row style={{overflowY : "scroll",maxHeight : "43.5vh", minHeight : "43.5vh"}}>
                    <InvestorsDetails investors={information}/>
                </Grid.Row>
                <Grid.Row className="card_button teal_space" verticalAlign="middle" textAlign="center">
                    <Header as="h3" style={{margin : "0.4em  1.4em"}}
                        content="Remaining amount $850.000 of $8.300.800" inverted/>
                    <Progress percent={25} style={{margin : "0.4em  1.4em",}} color="blue"
                        size='tiny'/>
                    <Grid.Row style={{margin : "0.4em  1.4em",}}>
                        <Header as="h6" content="0%" floated='left' inverted/>
                        <Header as="h6" content="100%" floated="right" inverted/>
                    </Grid.Row>
                    
                </Grid.Row>
            </Grid.Column>
            
        </Grid>
    )
}
export default ProductDetail