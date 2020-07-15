import React from "react";
// import { observer, inject } from 'mobx-react';
// @inject('store')
// @observer
// import { observer, inject } from 'mobx-react'
// @inject('store')
// @observer
import { Form, Input, InputNumber, Button } from 'antd';
class Demos extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      // required: '${label} is required!',
      // types: {
      //   email: '${label} is not validate email!',
      //   number: '${label} is not a validate number!',
      // },
      // number: {
      //   range: '${label} must be between ${min} and ${max}',
      // },
    };
    const onFinish = values => {
      console.log(values);
    };
    return (
      <div>  
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'age']}
              label="Age"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      </div>
    );
  }
};
export default Demos;