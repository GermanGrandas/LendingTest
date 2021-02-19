import React,{useRef,useState} from 'react'
import { Item,Grid,Header, Button, Form } from 'semantic-ui-react'
import { PieChart } from "react-minimal-pie-chart";
import axios from 'axios';



const ItemDetail = ({investor,setEdit}) =>{ 
    const investorId = useRef(investor.id);
    const {investor_name,purchased,sold} = investor
    const sold_str = `$${sold}`
    return (
        <Item className="ui inverted segment simple_border" style={{margin : "0 0"}}>
            <Item.Content>
            <Item.Header style={{width : "100%"}}>
                <Grid verticalAlign="middle" style={{maxWidth: "100%",margin: "0", padding:"1.4em"}}>
                    <Grid.Row columns={4} textAlign="center" style={{padding:"0.1em"}}>
                        <Grid.Column width={5}><Header as="h5" content={investor_name}/></Grid.Column>
                        <Grid.Column width={4}> <Header as="h5" content={sold_str}/></Grid.Column>
                        <Grid.Column width={4}>
                            <PieChart
                                data={[{ value: purchased, color: "#16c4c4" }]}
                                style={{ height: "60px" }}
                                totalValue={100}
                                lineWidth={10}
                                background="#969696"
                                label={({ dataEntry }) => dataEntry.value}
                                labelStyle={{
                                    fontSize: "25px",
                                    fontFamily: "sans-serif",
                                    fill: "#969696",
                                }}
                                labelPosition={0}
                            />
    
                        </Grid.Column>
                        <Grid.Column width={3}>
                            
                            <Button icon="pencil" color="teal" circular size="tiny" onClick={() => setEdit(investorId)}/>    
                            <Button icon="cancel" circular  color="teal" size="tiny" basic/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Item.Header>
        </Item.Content>
        </Item>
    )
}

const EditView = ({investors, investor_info, finishEdit}) =>{
    const {investor_name,left_amount,id} = investor_info
    const numeric_amount = parseFloat(left_amount)

    const [formData, setFormData] = useState({id : id, investor: "", sold: left_amount });

    const [error, setError] = useState(false)
    let { investor , sold} = formData
    const changeForm = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };
    const handleSelect = (e, { value }) => setFormData({
        ...formData,
        "investor": value,
      });;
    const handleSubmit = e =>{
        e.preventDefault()
        const numerical_pattern = /^[+-]?\d+(\.\d+)?$/;
        const isNumber  = numerical_pattern.test(sold);
        if(isNumber && investor !== ""){
            setError(false)
            axios.put("https://demo7555831.mockable.io/edit_investor",formData).then(
                ({data}) => {
                    
                    finishEdit(formData)
                }
            ).catch(
                err => {
                    setError(true)
                    console.error(err)
                }
            )
            
        }
        else{
            setError(true)
        }
    }
    return(
        <Item className="ui inverted segment simple_border" style={{margin : "0 0"}}>
            <Item.Content>
                <Item.Header style={{width : "100%"}}>
                    <Form onSubmit={handleSubmit} success>
                    <Grid verticalAlign="middle" style={{maxWidth: "100%",margin: "0", padding:"1.4em"}}>
                        
                            <Grid.Row columns={4} textAlign="center" style={{padding:"0.1em"}}>
                                <Grid.Column width={6}>
                                    <Form.Select  fluid
                                        label='Select investor'
                                        options={investors}
                                        onChange={handleSelect}
                                        name="investor"
                                        error={error}
                                        placeholder={investor_name}/>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Form.Input 
                                        fluid label='Amount to sell' 
                                        name="sold" placeholder={numeric_amount} 
                                        onChange={changeForm} value={sold}
                                        error={error}
                                    />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button icon="save" color="teal" circular size="tiny" type="submit"/>    
                                    <Button icon="cancel" circular  color="teal" size="tiny" basic/>
                                </Grid.Column>
                            </Grid.Row>
                        
                        </Grid>
                    </Form>
                </Item.Header>
            </Item.Content>
        </Item>
    )
}
export const InvestorsDetails = ({investors}) => {
    const [selectedInvestor, setSelectedInvestor] = useState({})
    const [setEditView, setSetEditView] = useState(false)
    const investors_names = investors.map(({investor_name} )=> ({
        key:investor_name,
        value: investor_name,
        text: investor_name,
      }))
    const setEdit = ({current : investor_id }) =>{
        const seleted_inv = investors.filter(({id}) => id === investor_id)[0]
        setSelectedInvestor(seleted_inv)
        setSetEditView(true)
    }

    const finishEdit = investor =>{
        console.log(investor);
        setSetEditView(false)
    }
    return (
        <Item.Group>
            {
                !setEditView ?
                    investors.map(investor => {
                    return (<ItemDetail key={investor.id} investor={investor} setEdit={setEdit}/>)}) :
                <EditView investors={investors_names} investor_info={selectedInvestor} finishEdit={finishEdit}/>
            }
        </Item.Group>
    )
}

export {EditView}