import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react'
import { DATA_TYPE } from './constants'

class Keypad extends React.Component
{
  constructor(params) {
    super(params);
  }

  generate_value = () => {
    const minimum = 128;
    const maximum = 4096;
    const random = minimum + Math.round(Math.random() * (maximum - minimum));
    this.props.changeValueCallback(random);
  }

  provide_data = (value) => {
    const data = {
      type: (value >= 0 && value <= 9) ? DATA_TYPE.VALUE : DATA_TYPE.OPERATION,
      value: value,
    };
    this.props.handleDataCallback(data);
  }

  render = () => {
    return (
      <Segment>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column><Button onClick={() => { this.provide_data('('); }}>(</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(')'); }}>)</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('%'); }}>&#x25;</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('/'); }}>&#xF7;</Button></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Button onClick={() => { this.provide_data(7); }}>7</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(8); }}>8</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(9); }}>9</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('*'); }}>&#xD7;</Button></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Button onClick={() => { this.provide_data(4); }}>4</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(5); }}>5</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(6); }}>6</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('-'); }}>&#x2212;</Button></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><Button onClick={() => { this.provide_data(1); }}>1</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(2); }}>2</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data(3); }}>3</Button></Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('+'); }}>&#x2B;</Button></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{/*<Button>&#x2213;</Button>*/}</Grid.Column>
            <Grid.Column><Button onClick={() => { this.provide_data('0'); }}>0</Button></Grid.Column>
            <Grid.Column>{/*<Button>.</Button>*/}</Grid.Column>
            <Grid.Column><Button onClick={this.props.calculate}>&#x3D;</Button></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Keypad;
