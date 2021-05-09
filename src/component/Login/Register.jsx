import React from "react";
import "./Register.css"
import { Form, Input, InputNumber, Button } from 'antd';
const Register = () => {

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
    const onFinish = (values) => {
            console.log(values);
        };

    return(
    <div className="register">
        <h1>Register</h1>
        {/*<form>*/}
        {/*<input type="text" name="name" id="name" placeholder="NAME"/>*/}
        {/*<input type="email" name="email" id="email" placeholder="EMAIL"/>*/}
        {/*<input type="tel" name="phone" id="phone" placeholder="NUMBER"/>*/}
        {/*<input type="password" name="password" id="password" placeholder="PASSWORD"/>*/}
        {/*<input type="password" name="password" id="password" placeholder="RE-ENTER PASSWORD"/>*/}
        {/*<input type="button" name="button" id="button" value="SUBMIT"/>*/}
        {/*</form>*/}
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input placeholder="Enter Your Name"/>
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input placeholder="Enter Your Email"/>
            </Form.Item>
            <Form.Item
                name={['user', 'phone']}
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 10,
                    },
                ]}
            >
                <Input placeholder="Enter Your Number"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input placeholder="Enter Your Password"/>
            </Form.Item>
            <Form.Item
                name="re-password"
                rules={[{ required: true, message: 'Please input your re-enter password!' }]}
            >
                <Input placeholder="Confirm Your Password"/>
            </Form.Item>
            <br/>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
    )
}
export default Register;