import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

class Information extends React.Component
{
  constructor(params) {
    super(params);
  }

  generateEntry = (index, entry) => {
    return (
      <Grid.Row key={index}>
        <Grid.Column>{entry.value}</Grid.Column>
      </Grid.Row>
    )
  }

  render = () => {
    return (
      <Segment>
        <Grid textAlign='center'>
          {this.props.data.map((element, index) => { return this.generateEntry(index, element); })}
        </Grid>
      </Segment>
    )
  }
}

export default Information;
