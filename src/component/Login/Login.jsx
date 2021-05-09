import React from "react";
import "./Login.css"
import { Form, Input, Button, Checkbox } from 'antd';
import {useDispatch} from "react-redux";
import {auth} from "../../Redux/Auth";

const Login = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
   const dispatch =  useDispatch();
        const onFinish = (values) => {
            console.log(values)
            dispatch(auth(values.username,values.password))
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className="login">
                <h1>Login</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input placeholder="Enter Email or Username"/>
                </Form.Item>

                <Form.Item

                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input placeholder="Enter Password"/>
                </Form.Item>
                <br/>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" >
                        Create New Account
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
}
export default Login;