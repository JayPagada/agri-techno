import React from "react";
import "./Contact.css";
import { Form, Input, InputNumber, Button } from 'antd';
import image from "../../assete/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {feedBackForm} from "../../Redux/FeedBack";
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
    const dispatch =  useDispatch();
    const authCheck = useSelector(state => state.auth);
  const onFinish = (values) => {
    console.log(values);
    dispatch(feedBackForm(values.user,authCheck.token))
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
        <Form.Item name={['user', 'phone']} >
          <Input placeholder="Phone"/>
        </Form.Item><br/>
        <Form.Item name={['user', 'feedback']} >
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
