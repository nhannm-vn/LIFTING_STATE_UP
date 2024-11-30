//_Đây sẽ là component cha

import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'

//_Object chứa 2 trạng thái
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

//_Hàm chuyển đổi 2 nhiệt độ
const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
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

  //_method có nhiệm vụ là set lại state
  //_Ngta bấm edit bên ô nào thì value sẽ chuyển đến cùng với scale hiện tại của ô đó để
  //set vào state và từ đó biết được mà tính toán. Có 2 ô thì ô nào nhúc nhích thì scale của ô đó sẽ tương ứng
  //==> mục đính là set lại scale và value cho state
  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale
    })
  }

  render() {
    //_Mỗi khi render ra thì lấy scale và temperature để tính cho từng loại nhiệt độ
    //_Flow là bên kia gõ ô nào thì bên này chạy hàm setState sẽ set temperature và scale
    //sau đó sẽ tính toán riêng cho từng loại nhiệt độ và từng ô quy đổi và trả giá trị thông qua
    //thuộc tính của prop temperature và hiển thị lên UI

    //_Lấy ra scale và temperature ra từ state để tính toán cho từng loại nhiệt độ
    const { scale, temperature } = this.state

    return (
      <div>
        <TemperatureInput
          title={scaleNames.c}
          onTemperatureChange={this.handleChange('c')}
          temperature={this.state.temperature}
        />
        <TemperatureInput
          title={scaleNames.f}
          onTemperatureChange={this.handleChange('c')}
          temperature={this.state.temperature}
        />
      </div>
    )
  }
}

export default Calculator
