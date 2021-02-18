import React,{useRef,useState} from 'react'
import { Item,Grid,Header, Button } from 'semantic-ui-react'

const ItemDetail = ({investor}) =>{ 
    const {id,investor_name,left_amount,purchased,remaining,sold} = investor

    const investorId = useRef(id);

    const sold_str = `$${sold}`
    const left_str = `$${left_amount}`

    return (
        <Item className="ui inverted segment simple_border" style={{margin : "0 0"}}>
            <Item.Content>
            <Item.Header style={{width : "100%"}}>
                <Grid verticalAlign="middle" style={{maxWidth: "100%",margin: "0", padding:"1.4em"}}>
                    <Grid.Row columns={6} textAlign="center" style={{padding:"0.1em"}}>
                        <Grid.Column width={4}><Header as="h5" content={investor_name}/></Grid.Column>
                        <Grid.Column width={2}> <Header as="h5" content={sold_str}/></Grid.Column>
                        <Grid.Column width={2}><Header as="h5" content={purchased}/></Grid.Column>
                        <Grid.Column width={2}><Header as="h5" content={left_str}/></Grid.Column>
                        <Grid.Column width={2}><Header as="h5" content={remaining}/></Grid.Column>
                        <Grid.Column width={3}>
                            
                            <Button icon="pencil" color="teal" circular size="tiny"/>    
                            <Button icon="cancel" circular  color="teal" size="tiny" basic/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Item.Header>
        </Item.Content>
        </Item>
    )
}

export const InvestorsDetails = ({investors}) => {
    return (
        <Item.Group>
            {
                investors.map(investor => {
                return (<ItemDetail key={investor.id} investor={investor}/>)
            })
            }
        </Item.Group>
    )
}
