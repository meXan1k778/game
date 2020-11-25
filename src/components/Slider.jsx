import React from 'react';

import {  Slider, InputNumber, Row, Col  } from  'antd';

import 'antd/dist/antd.css';

export default class IntegerStep extends React.Component {
    state = {
      inputValue: 1,
    };

    

    onChange = value => {
      this.setState({
        inputValue: value,
      });
      this.props.setAnswerText(value)
    };
  
    render() {
      const { inputValue } = this.state;
      return (
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={180}
              style={{ width: '200px' }}
              defaultValue={180}
              onChange={this.onChange}
              value={typeof inputValue === 'number' ? inputValue : 0}
            />
          </Col>
          {/* <Col span={4}>
            <InputNumber
              min={1}
              max={180}
              style={{ margin: '0 16px' }}
              value={inputValue}
              onChange={this.onChange}
            />
          </Col> */}
        </Row>
      );
    }
  }

  