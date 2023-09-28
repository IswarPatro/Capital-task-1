import React from 'react'
import {Row,Col,Checkbox,Switch,Divider} from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
interface SubInfoProps{
    text:string,
    subText?:string,
}
const subInfo:React.FC <SubInfoProps>= (props) => {

  return (
    <>
    <Row style={{paddingTop:"auto",paddingBottom:"auto"}}>
          <Col span={14}>{props.text}
            <span style={{fontSize:"12px"}} >{props.subText}</span>
          </Col>
          <Col span={6} ><Checkbox onChange={onChange} style={{fontSize:"12px"}}>Internal</Checkbox></Col>
          <Col span={4}  >
            <Switch size="small"defaultChecked /> 
            <span  style={{fontSize:"12px"}}>Show</span>
          </Col>
        </Row>
        <Divider style={{border:"1px solid black"}}/>
    </>
    
  )
}

export default subInfo