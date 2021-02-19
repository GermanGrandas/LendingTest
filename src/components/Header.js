import { Segment, Menu,Header, Icon,Grid } from "semantic-ui-react";
import React from 'react'
import { Link } from "react-router-dom";

const MenuItems = ({ children, to }) => {
  
    return (
      <Link to={to}
        style={{ color: 'white', marginRight: 15, marginTop: 15 }} >
        <Menu.Item style={{justifyContent: "center", margin:"0.5em 0"}} >
          {children}
        </Menu.Item>
      </Link>
    )
  };

export const HeaderComponent = () => {
    return (
        <header>
            <Segment
                inverted
                // vertical
                // style={{  backgroundColor: "#066732" }}
                textAlign='center'
            >   
                <Menu
                    secondary
                    inverted
                    attached="top"
                    //style={{ display: "flex", height: "15px", backgroundColor: "#066732" }}
                    stackable
                    aling="left"
                >
                    <Grid style={{width : "100%"}}>
                        <Grid.Row columns={3}  centered verticalAlign="middle">
                            <Grid.Column width={6}>
                                <Menu.Menu position='left'>
                                    <img  alt='quantic-logo' src="https://lendingfront.com/wp-content/uploads/2019/12/white_logo.svg"  width={150} height={50} style={{margin:"0.5em 0.4em"}}/>
                                    <MenuItems to='/'><Header as="h4" content="APPLICATION" inverted/></MenuItems>
                                    <MenuItems to='/'>
                                        <Header as="h4" inverted>
                                            <Icon name='search'/>
                                            <Header.Content>SEARCH</Header.Content>
                                        </Header>
                                    </MenuItems>  
                                </Menu.Menu>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as="h1" content="QA" inverted textAlign='center'  />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Menu.Menu position="right">
                            
                                    <MenuItems to='/'><Header as="h4" content="DASHBOARD" inverted/></MenuItems>
                                    <MenuItems to='/'>
                                        <Header as='h4' inverted>
                                            <Icon name='address book' size='small' />
                                            <Header.Content>USER ADMIN</Header.Content>
                                        </Header>
                                    </MenuItems>
                                    <MenuItems to='/'>
                                    <Header as='h4' inverted>
                                        <Icon name='user circle' size='small' />
                                        <Header.Content>USER ADMIN</Header.Content>
                                    </Header>
                                    </MenuItems>
                                </Menu.Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                    
                </Menu>
            </Segment>
        </header>
    )
}
