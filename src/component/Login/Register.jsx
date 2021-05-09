import React from "react";
import "./Register.css"
import { Form, Input, InputNumber, Button } from 'antd';
import {auth} from "../../Redux/Auth";
import {useDispatch} from "react-redux";
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
    const dispatch =  useDispatch();
    const onFinish = (values) => {
            console.log( values.user.email ,values.password,values.user.name);
        dispatch(auth(values.user.email,values.password ,values.user.name,true))
        };

    return(
    <div className="register">
        <h1>Register</h1>
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
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input placeholder="Enter Your Password"/>
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