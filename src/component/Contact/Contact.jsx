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
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
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
          <Input placeholder=" your Name"/>
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
          <Input placeholder="Your Email "/>
        </Form.Item>
        <Form.Item name={['user', 'Phone']} label="Phone">
          <Input placeholder="Phone"/>
        </Form.Item>
        <Form.Item name={['user', 'your Message']} label="your Message">
          <Input.TextArea placeholder="your Message"/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      
    </div>
  );
};

export default Contact;
