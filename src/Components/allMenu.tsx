import React,{useState} from 'react';
import {Button, Card,Input,Select} from 'antd';
import {PlusOutlined,CloseOutlined } from '@ant-design/icons'
import YesOrNo from "../forms/yesOrno"
import MultipleChoice from '../forms/multipleChoice';
import DropDown from '../forms/dropdown';

const allMenu : React.FC = () => {
const [data,setData]=useState("");
const handleChange = (value: string) => {
setData(`${value}`);
};
  return (

    <div>
        <h4 style={{marginTop:-20,marginBottom:5,fontWeight:"bold"}}>Type</h4>
        <Select
            showSearch
            style={{ width: 350,height:35}}
            placeholder="Select Question Type"
            optionFilterProp="children"
            onChange={handleChange}
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
            {
                value: 'Dropdown',
                label: 'Dropdown',
            },
            {
                value: 'Multiple Choice',
                label: 'Multiple Choice',
            },
            {
                value: 'Paragraph',
                label: 'Paragraph',
            },
            {
                value: 'Short Answer',
                label: 'Short Answer',
            },
            {
                value: 'Yes/No',
                label: 'Yes/No',
            },
            {
                value: 'Video Based Questions',
                label: 'Video Based Questions',
            },
            ]}

        />
        <h4 style={{marginBottom:5,fontWeight:"bold"}}>Question</h4>
        <Input  style={{ width: 350,height:35}}/>
        {
            (data==="Yes/No")?(
            <div>
            <YesOrNo />
            </div>
            ):(
            <>
            </>
            )
        }
        {
            (data==="Multiple Choice")?(
            <div>
            <MultipleChoice/>
            </div>
            ):(
            <>
            </>
            )
        }
        {
            (data==="Dropdown")?(
            <div>
            <DropDown/>
            </div>
            ):(
            <>
            </>
            )
        }
        
    </div>

  )
}

export default allMenu