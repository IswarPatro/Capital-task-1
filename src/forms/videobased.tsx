import React from 'react'
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const videobased:React.FC = () => {
  return (
    <>
    <span  style={{fontWeight:"bold",color:"red"}}>
    <CloseOutlined />
    Delete Question
    </span>
    <Button style={{backgroundColor:"green", color:"white",marginLeft:170,marginTop:40}}>Save</Button>
    </>
  )
}

export default videobased