import NotAuthenticatedLayout from "@/layouts/NotAuthenticatedLayout";
import { useAuthStore } from "@/stores/auth";
import { Button, Form, Input, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

type FieldType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string
};

function Register() {
  const authStore = useAuthStore()
  const router = useRouter();

  const onSubmit = async (values: FieldType) => {
    try {
      await authStore.doRegister(values);
      router.push("/login")
    } catch (error) {
      alert("Failed to register")
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "25vh",
      }}
    >
      <Space direction="vertical">
        <h1>Register a new account</h1>
        <Link href="/login">Have an account ? Login here</Link>
        <Form
          style={{ width: "100%", maxWidth: "450px" }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={() => {}}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="First name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your First name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Last name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your Last name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="passwordConfirm"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}

Register.withLayout = (page: ReactElement) => {
  return <NotAuthenticatedLayout>{page}</NotAuthenticatedLayout>;
};

Register.redirectIfDoneAuth = true;

export default Register;
