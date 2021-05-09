import React from "react";
import "./Contact.css";
import { Form, Input, InputNumber, Button } from 'antd';
import image from "../../assete/logo.png";
import logo0 from "../../assete/CompanyLogo/facebook.svg";
import logo1 from "../../assete/CompanyLogo/google.svg";
import logo2 from "../../assete/CompanyLogo/instagram.svg";
import logo3 from "../../assete/CompanyLogo/pinterest.svg";
import logo4 from "../../assete/CompanyLogo/twitter.svg";
import logo5 from "../../assete/CompanyLogo/youtube.svg";
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
        <div className="part1">
      <section className="mb-4 container card ">
        <p className="text-center ">
         <b>Do you have any questions? Please do not hesitate to contact us
          directly.</b><br/><br/>
            Our team will come back to you within a matter of hours to help you.
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
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
        </div>
        <div className="line2"/>
        <div className="part2">
            <div className="logo1">
                <img src={image} height="100px" />
            </div>
            <div className="address">
                <b>Address</b>
                <div>
                Atmiya Institute of Technology & Science
                by - Jay Pagada, Movalik Movaliya,
                Harsh Manvar.
                </div><br/>
                <div>
                    info@Agritechno.com
                </div>
                <br/>
                <div>
                    <b>Tel</b> 123-456-6780
                    <br/>
                    <b>Fax</b> 123-456-5679
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
