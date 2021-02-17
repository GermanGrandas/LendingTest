import React from 'react'
import { Grid } from 'semantic-ui-react'

export const ProductDetail = () => {
    return (
        <Grid columns={1}>
            <Grid.Column>
                <Grid.Row>
                    test 1
                </Grid.Row>
                <Grid.Row> test 2</Grid.Row>
                <Grid.Row style={{backgroundColor : "#e4e4e4"}}>
                    test 3
                </Grid.Row>
            </Grid.Column>
            
        </Grid>
    )
}
