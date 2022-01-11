import React from 'react';
import { Segment, Grid } from 'semantic-ui-react'

class DisplayDecimal extends React.Component
{
  constructor(params) {
    super(params);
  }

  render = () => {
    return (
      <Segment>
        <Grid textAlign='left'>
          <Grid.Column width={3}>DEC</Grid.Column>
          <Grid.Column width={6}>{this.props.value.toString(10)}</Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default DisplayDecimal;
