import React, {useState,useEffect} from 'react'
import { Grid, Header, Progress,Button,Item } from 'semantic-ui-react'
import axios from 'axios';
import { InvestorsDetails,EditView } from './investorsDetails';

//"https://demo7555831.mockable.io/get_investors_by_id"
const ProductDetail = ({product}) => {
    const [information, setInformation] = useState([])
    const [addProductView, setAddProductView] = useState(false)

    const [investors_names, setInvestors_names] = useState([])
    useEffect(() => {
        if(product !== ""){
            axios.post(
                "/api/get_investor_by_id",{product_id : product}
            ).then(
                ({data}) => {
                    setInformation(data)
                }
            ).catch(console.error)
            axios.get("/api/get_investor_names").then(
                ({data}) =>{
                    const processed_inv = data.map(({name,idf} )=> ({
                        key:idf,
                        value: name,
                        text: name,
                      }))
                    setInvestors_names(processed_inv)
                }
            ).catch(console.error)
        }   
    }, [product])
    const addProduct = ({idf,formData})=>{
        formData.purchased = 10
        formData.left_amount =710.93
        formData.remaining = 20
        axios.post(
            `/api/create_investor/${idf}`,formData
        ).then(
            ({data}) => {
                setInformation([...information,formData])
                setAddProductView(false)
            }
        ).catch(console.error)
    }
    const removeInvestor = (investor_id)=>{
        const filtered = information.filter(({idf}) => idf !== investor_id)
        setInformation(filtered)
    }
    const cancelEdit = ()=>{
        setAddProductView(false)
    }
    const updateInvestor = (data)=>{
        const updated = information.map( investor => 
            (investor.idf === data.idf) ? 
                { ...investor, sold: parseFloat(data.sold),investor_name : data.investor_name  } : investor)
        setInformation(updated)
    }
    return (
        <Grid columns={1}>
            <Button circular icon="add" color="orange" className="button_floated" onClick={()=>setAddProductView(true)}/>
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
                    <Item.Group>
                        {
                            product === "" ? 
                            <Item className="ui inverted segment simple_border" style={{margin : "0 0"}}>
                                <Item.Content>
                                    <Item.Header style={{width : "100%"}}>
                                        You should select one product first
                                    </Item.Header>
                                    
                                </Item.Content>
                            </Item> :
                            !addProductView ? 
                                <InvestorsDetails investors={information} removeInvestor={removeInvestor} 
                                    investors_names={investors_names} updateInvestor={updateInvestor}/> :
                                <EditView investors={investors_names} cancelEdit={cancelEdit}
                                    investor_info={{investor_name : "" , left_amount : 0 ,idf : product}} finishEdit={addProduct}/>

                        }
                    </Item.Group>
                    
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