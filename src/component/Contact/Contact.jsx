import React from "react";
import "./Contact.css";
import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: 'Name is required!',
  types: {
    email: 'email is not a valid email!',
    number: 'number is not a valid number!',
  },
  number: {
    range: 'number must be of 10 digit ',
  },
};

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="containerContact">
      <section className="mb-4 container card ">
        <p className="text-center ">
         <b>Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.</b> 
        </p>
      </section>
        <div className="containerForm">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
            name={['user', 'name']}
            rules={[
              {
                required: true,
              },
            ]}
        >
            <Input placeholder=" your Name"/>
        </Form.Item>
          <br/>
        <Form.Item
            name={['user', 'email']}
            rules={[
              {
                type: 'email',
              },
            ]}
        >
          <Input placeholder="Your Email "/>
        </Form.Item><br/>
        <Form.Item name={['user', 'Phone']} >
          <Input placeholder="Phone"/>
        </Form.Item><br/>
        <Form.Item name={['user', 'your Message']} >
          <Input.TextArea placeholder="your Message"/>
        </Form.Item><br/>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
    </div>
  );
};

export default Contact;
