//_Component xài chung cho cả hai trạng thái nhiệt độ và chỉ khác props truyền vào

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TemperatureInput extends Component {
  //_Khi ô input biến đổi thì chạy hàm này. Mà khi hàm đó chạy
  //thì hàm của thằng cha sẽ chạy
  handleChange = (event) => {
    //_Lấy value từ thằng bị dính sự kiện và truyền cho hàm chạy
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    //_Lấy temperature và title từ props
    const { temperature, title } = this.props
    return (
      <fieldset>
        <legend>Enter temperature in {title}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

//_Viết propType giới hạn đầu vào cho các thuộc tính của component
TemperatureInput.propTypes = {
  onTemperatureChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TemperatureInput
