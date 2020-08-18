import React from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd';

export default () => {
  return (
    <Form>
      <Row>
        <Col span={6}>
          <Form.Item label={'桌面名称'} name>
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={6}>
          <Form.Item label={'桌面标题'}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={2}/>
        <Col span={6}>
          <Form.Item label={'是否默认'}>
            <Select>
              <Select.Option value="y">是</Select.Option>
              <Select.Option value="n">否</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
