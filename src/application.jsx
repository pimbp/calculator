import React from 'react';
import { Grid } from 'semantic-ui-react'
import DisplayHexadecimal from './display_hex'
import DisplayDecimal from './display_dec'
import DisplayOctal from './display_oct'
import DisplayBinary from './display_bin'
import DisplayResult from './display_result'
import Keypad from './keypad'
import Information from './information'
import { DATA_TYPE } from './constants'

class Application extends React.Component
{
  constructor(params) {
    super(params);

    this.state = {
      value: 2137,
      data: [
        // { type: DATA_TYPE.VALUE, value: '1234', },
        // { type: DATA_TYPE.OPERATION, value: '+', },
        // { type: DATA_TYPE.VALUE, value: '4321', },
      ],
      
    }
  }

  change_value = (v) => {
    this.setState({
      value: v,
    });
  }

  handle_data = (d) => {
    const newState = Object.assign({}, this.state);

    if (newState.data.length === 0) {
      if (d.type === DATA_TYPE.VALUE) {
        newState.data.push(d);
        this.setState(newState);
      }
      return;
    }

    const lastIndex = newState.data.length - 1;
    const lastItem = newState.data[lastIndex];
    const isOperation = (element) => { return DATA_TYPE.OPERATION === element.type; };

    newState.data.push(d);
    this.setState(newState);
  }
  calculate = () =>
  {
    let wyjscie = []
    let stos = []
    this.state.data.forEach(value => {
      if(value.type==DATA_TYPE.VALUE)
      {
        wyjscie.push(value.value)
      }
      else if(value.value=="(")
      {
        stos.push(value.value)
      }
      else if(value.value==")")
      {
        for(let i = stos.length-1; i>=0; i--)
        {
            if(stos[i]=="(")
            {
              stos.splice(i,1)
              break
            }
            wyjscie.push(stos[i])
            stos.splice(i,1)
        }
      }
      else if(value.type==DATA_TYPE.OPERATION)
      {
        let check = false
        if(value.value=="+" || value.value=="-"){
        for(let i = stos.length-1; i>=0; i--)
        {
            if(stos[i]=="(")
            {
              break
            }
            if(stos[i]=="*"||stos[i]=="/")
            {
              check=true
            }
        }
      }
        if(check)
        {
          for(let i = stos.length-1; i>=0; i--)
          {
            if(stos[i]=="(")
            {
              break
            }
            wyjscie.push(stos[i])
            stos.splice(i,1)
          }
          stos.push(value.value)
        }
        else{
          stos.push(value.value)
        }
      }
      
      
    })
    for(let i = stos.length-1; i>=0; i--)
    {
      wyjscie.push(stos[i])
      stos.splice(i,1)
    }
    console.log(wyjscie)
    wyjscie.forEach(value=>{
      if(typeof value == "number")
      {
        stos.push(value)
      }
      else
      {
        let a, b, wynik
        a = stos[stos.length-1]
        b = stos[stos.length-2]
        if(value=="+")
        {
          wynik=a+b;
        }
        else if(value=="-")
        {
          wynik=b-a;
        }
        else if(value=="*")
        {
          wynik=a*b;
        }
        else if(value=="/")
        {
          wynik=b/a;
        }
        stos.splice(stos.length-2, 2)
        stos.push(wynik)

      }
      this.setState({value: stos[0]}) 
    })
    
  }
  render = () => {
    return (
      <Grid columns={2} textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 350 }}>
          <DisplayResult value={this.state.value} />
          <DisplayHexadecimal value={this.state.value} />
          <DisplayDecimal value={this.state.value} />
          <DisplayOctal value={this.state.value} />
          <DisplayBinary value={this.state.value} />
          <Keypad changeValueCallback={this.change_value} handleDataCallback={this.handle_data} calculate={this.calculate} />
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 200 }}>
          <Information data={this.state.data} />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Application;
