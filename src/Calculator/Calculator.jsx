//_Đây sẽ là component cha

import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

//_Object chứa 2 trạng thái
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

//_Hàm công thức chuyển đổi 2 nhiệt độ
const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

//_Function chuyển đổi nhiệt độ
//nhận vào temperature và callback
const tryConvert = (temperature, convertFunc) => {
  //_Lưu ý: lỡ người dùng không nhập vào số
  //mà nhập vào tào lao thì không chuyển trả về giá trị '' để render ra
  //_Lưu ý: vì mình ép từ chuỗi về số để tính toán và trong quá trình đó
  //có thể người dùng để '' mà như vậy ép bằng class Number sẽ trả về 0 và nó sẽ tính
  //nên không hay. Chính vì vậy mà nên chặn giá trị đầu vào là '' trước khi ép kiểu
  const input = Number(temperature)
  if (Number.isNaN(input) || temperature === '') {
    return ''
  } else {
    const output = convertFunc(input)
    //_Làm tròn đến 3 chữ số thập phân
    return Math.round(output * 1000) / 1000
  }
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

    //_Tính riêng nhiệt độ cho thằng Celsius. Flow là nếu state đang có scale là 'c' thì mình ô này mình sẽ giữ nguyên
    //và nếu là 'f' thì mình mới tính toán
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature

    //_Tính riêng nhiệt độ cho thằng Fahrenheit trước khi render ra. Nếu scale là 'c' thì sẽ tính còn 'f' thì mình
    //sẽ giữ nguyên
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput title={scaleNames.c} onTemperatureChange={this.handleChange('c')} temperature={celsius} />
        <TemperatureInput title={scaleNames.f} onTemperatureChange={this.handleChange('f')} temperature={fahrenheit} />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    )
    // _Vì thằng celsius là mình thông báo độ sôi
    //nghĩa là nó phụ thuộc vào nhiệt độ là một con number
    //và mình đã ràng buộc proptype bằng đầu vào number
    //tuy nhiên sẽ có trường hợp là mình chuyển nhập nội dung trong ô fahrenheit
    //dẫn tới nó đâu có ép kiểu cho ô celsius dẫn tới nó vẫn là string. Mà nếu như là string
    //thì vi phạm proptype. Nên là thuộc tính celsius trước khi mình truyền lên cho nó thì cần
    //phải ép về number. Nếu là '' thì ép về sẽ là 0
  }
}

export default Calculator
