import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Segment } from 'semantic-ui-react'
import { HeaderComponent } from './Header'

export const Layout = ({children}) => {
    const year = new Date().getFullYear() || '2021'
    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>LendingTest</title>
            <link rel="canonical" href="https://germangrandas.github.io/LendingTest/" />
          </Helmet>
         <HeaderComponent/>
         <main>{children}</main>
         <footer >
             
         <Segment
          vertical
          
          //color="black"
          size='mini'
          textAlign='center'
          style={{
            padding: "4em 0em",
            boxShadow: "-8px 15px 30px rgba(133,141,148,.66)",
            // backgroundColor: "#000",
            //border: "1px solid black",
          }}
        >
            <Header as="h3" content={`©LendingFront${year}`}/>
        </Segment>
         </footer>
        </>
    )
}
