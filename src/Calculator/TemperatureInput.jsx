//_Component xài chung cho cả hai trạng thái nhiệt độ và chỉ khác props truyền vào

import React, { Component } from 'react'

export class TemperatureInput extends Component {
  render() {
    //_Lấy temperature và title từ props
    const { temperature, title } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
      </fieldset>
    )
  }
}

export default TemperatureInput
