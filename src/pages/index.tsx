import { login } from '@/features/auth';
import NotAuthenticatedLayout from '@/layouts/NotAuthenticatedLayout'
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'

type FieldType = {
  email: string;
  password: string;
};

function Index() {
  const router = useRouter()
  const onSubmit = async (args: FieldType) => {
    try {
      await login(args);
      router.push("/dashboard");
    } catch (error) {
      alert("Failed to login");
    }
  };
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
        <h1>Sign in to your account</h1>
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
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
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

Index.withLayout = (page: ReactElement) => {
  return (
    <NotAuthenticatedLayout>
      {page}
    </NotAuthenticatedLayout>
  );
}

export default Index