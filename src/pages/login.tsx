import { login } from '@/features/auth';
import NotAuthenticatedLayout from '@/layouts/NotAuthenticatedLayout'
import { useAuthStore } from '@/stores/auth';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'

type FieldType = {
  email: string;
  password: string;
};

function Index() {
  const authStore = useAuthStore();
  const router = useRouter()
  const onSubmit = async (args: FieldType) => {
    try {
      await authStore.doLogin(args);
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
        <Link href="/register">No account ? Register here</Link>
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

Index.redirectIfDoneAuth = true

export default Index