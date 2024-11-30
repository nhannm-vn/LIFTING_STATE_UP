//_Đây sẽ là component cha

import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'

//_Object chứa 2 trạng thái
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //_Mình sẽ có 2 chủ chốt là temperature và scale để tính toán
      //mặc định sẽ cho nó là ''
      temperature: '',
      scale: ''
    }
  }
  render() {
    return (
      <div>
        <TemperatureInput title={scaleNames.c} />
        <TemperatureInput title={scaleNames.f} />
      </div>
    )
  }
}

export default Calculator
