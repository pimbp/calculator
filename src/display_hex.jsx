import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'

class DisplayHexadecimal extends React.Component
{
  constructor(params) {
    super(params);
  }

  render = () => {
    return (
      <Segment>
        <Grid textAlign='left'>
          <Grid.Column width={3}>HEX</Grid.Column>
          <Grid.Column width={6}>{this.props.value.toString(16)}</Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default DisplayHexadecimal;
