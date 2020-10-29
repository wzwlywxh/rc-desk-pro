import React from 'react'
import {Form, Row, Col, Input, Button, Select, Table} from 'antd'
import {DeskTableDataQuery} from "../../service"

export default () => {

  const [form] = Form.useForm()
  const [tableData, setTableData] = React.useState([])

  const onQuery = () => {
    const formData = form.getFieldValue()
    DeskTableDataQuery(formData).then(({data}) => {
      setTableData(data)
    })
  }

  const onReset = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: '桌面名称',
      dataIndex: 'deskName',
      key: 'name',
    },
    {
      title: '桌面标题',
      dataIndex: 'deskTitle',
      key: 'age',
    },
    {
      title: '桌面地址',
      dataIndex: 'deskPath',
      key: 'address',
    },
  ];

  return (
    <>
      <Form form={form}>
        <Row>
          <Col span={6}>
            <Form.Item label={'桌面名称'} name={'deskName'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={6}>
            <Form.Item label={'桌面标题'} name={'deskTitle'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}/>
          <Col span={6}>
            <Button onClick={onQuery}>查询</Button>
            <Button onClick={onReset}>重置</Button>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={tableData} />
    </>
  )
}
