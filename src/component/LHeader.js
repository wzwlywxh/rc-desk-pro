import React, { useEffect, useState } from 'react'
import { Row, Col, Badge } from 'antd'
import HeaderDropdown from './HeaderDropdown'
import { LogoutOutlined } from '@ant-design/icons';
import { ConfigGet, NoticeGet } from '../service'
import { MessageOutlined, GithubOutlined } from '@ant-design/icons';

const languageMap = {
  zh_CN: "简",
  zh_TW: "繁",
  en_US: "EN"
}

const userHeaderArray = [
  {
    id: 'editPassword',
    label: '修改密码'
  },
  {
    id: 'userConfig',
    label: '用户配置'
  },
  {
    id: 'shortMenu',
    label: '快捷菜单'
  }
]

const languageArray = [
  {
    type: 'zh_CN',
    label: '简'
  },
  {
    type: 'zh_TW',
    label: '繁'
  }
]

export default () => {

  // 桌面标题和语言
  const [deskTitle, setDeskTitle] = useState('')
  const [activeLang, setActiveLang] = useState('')
  useEffect(() => {
    ConfigGet().then(({data:{deskTitle, langType}}) => {
      setDeskTitle(deskTitle)
      setActiveLang(languageMap[langType])
    })
  }, [])

  // 未读消息
  const [msgList, setMsgList] = useState([])
  useEffect(() => {
    NoticeGet().then(({data: {msgList}}) => {
      setMsgList(msgList)
    })
  }, [])

  return (
      <Row className='ls-header'>
        <Col span={21}>{deskTitle}</Col>
        <Col span={3}>
          <Row>
            <Col span={6}>
              <Badge count={msgList.length} offset={[5, 0]} showZero>
                <HeaderDropdown list={msgList} keyString="msg_no" labelString="msg_title" IconComponent={MessageOutlined}/>
              </Badge>
            </Col>
            <Col span={6}>
              <HeaderDropdown list={userHeaderArray} keyString="id" labelString="label" IconComponent={GithubOutlined}/>
            </Col>
            <Col span={6}>
              <HeaderDropdown
                  list={languageArray} keyString="type" labelString="label"
                  IconComponent={({style})=><span style={style}>{activeLang}</span>}>
              </HeaderDropdown>
            </Col>
            <Col span={6}>
              <a>
                <LogoutOutlined style={{fontSize: 24}} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}
