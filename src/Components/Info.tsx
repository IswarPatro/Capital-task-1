import React,{useState} from 'react';
import {Card,Input,Button} from 'antd';
import {PlusOutlined,CloseOutlined} from '@ant-design/icons'
import SubInfo from './subInfo';
import AllMenu from './allMenu';

const Info = () => {
  const [show, setShow] = useState(false);
  
  const showQues=()=>{
    if(!show){
      setShow(true);
    }
  }


  return (
    <Card className="Card_Info"
    title="Personal Information" 
    bordered={true} 
    headStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)',color:'white',fontSize:"20px"}}
    bodyStyle={{paddingLeft:15,paddingTop:0}}
    style={{ width: 400,marginBottom:50}}>      
      <p>First Name</p>
      <Input placeholder=""size="small" style={{border:"none",borderRadius:0,borderBottom:"2px solid Black"}} />
      <p>Last Name</p>
      <Input placeholder=""size="small" style={{border:"none",borderRadius:0,borderBottom:"2px solid Black"}} />
      <p>Email</p>
      <Input placeholder=""size="small" style={{border:"none",borderRadius:0,borderBottom:"2px solid Black", marginBottom:20}} />
    
      <SubInfo text='PhoneNo' subText='(without dial code)'/> 
      <SubInfo text='Nationality'/>
      <SubInfo text='Current Residence'/>
      <SubInfo text='ID Number'/>
      <SubInfo text='Date Of Birth'/>
      <SubInfo text='Gender'/>
      <>
      <span  onClick={showQues}>
        {
          (show)?(
            <>
              <Card bordered={false} style={{ width: 398,marginLeft:-15,marginTop:-30,marginBottom:-25}}>
              <AllMenu/>
              <span onClick={()=>setShow(false)} style={{fontWeight:"bold",color:"red"}}>
              <CloseOutlined />
              Delete Question
              </span>
              <Button style={{backgroundColor:"green", color:"white",marginLeft:170,marginTop:40}}>Save</Button>
              </Card>
            </>            
          ):(
            <span style={{border:"none",fontWeight:"bold",color:"green"}}>
              <PlusOutlined/> Add a question
            </span>
          )
        }

      </span>
    </>
    
  </Card>
  )
}
export default Info;