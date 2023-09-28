import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Input,Checkbox } from 'antd'
import { UnorderedListOutlined,PlusOutlined,MinusOutlined} from '@ant-design/icons'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
const multipleChoice = () => {
  const [data,setData]=React.useState([
    {
    question:"",
    id:uuidv4(),
    },
  ]);

  const addQuestion=()=>{
    let _data=[...data]
    _data.push({
      question:'',
      id:uuidv4(),
    })
    setData(_data);
  }
  const removeQuestion=(id:string)=>{
    let _data=[...data]
    _data=_data.filter(idx=>idx.id!==id)
    setData(_data);
  }

  return (
    <>
    <h4 style={{marginBottom:5}}>Choice</h4>
    {data.map(idx=>(
      <div key={idx.id}>
      <UnorderedListOutlined /><Input  style={{ width: 290,height:35,marginBottom:5,marginLeft:2,marginRight:6}}/>
      {
        data.length>1 && (
          <MinusOutlined onClick={()=>removeQuestion(idx.id)}style={{marginRight:6,color:"red",fontWeight:"bold"}} />
        )
                 
      }
      <PlusOutlined onClick={addQuestion} style={{color:"green",fontWeight:"bold"}}/>
      </div>
    ))    
    }
    <Checkbox onChange={onChange} style={{fontSize:12,marginTop:-20}}>Enable "Other" Option</Checkbox>
    <h3>Max Choice Allowed</h3>
    <Input placeholder="enter number of choices here" style={{ width: 350,height:35}}/>
    </>    
  )
}

export default multipleChoice