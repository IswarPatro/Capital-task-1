import React,{useState} from 'react'
import {Card,Button} from 'antd';
import SubInfo from './subInfo';
import {PlusOutlined,CloseOutlined} from '@ant-design/icons'
import AllMenu from './allMenu';
const Profile:React.FC = () => {
  const [show, setShow] = useState(false);
  
  const showQues=()=>{
    if(!show){
      setShow(true);
    }
  }
  return (
    <Card className="Card_Info"
    title="Profile" 
    bordered={true} 
    headStyle={{backgroundColor: 'rgba(0, 0, 0, 0.8)',color:'white',fontSize:"20px",marginBottom:20}}
    bodyStyle={{paddingLeft:15,paddingTop:0}}
    style={{ width: 400,marginBottom:50}}>
      <SubInfo text='Education'/>
      <SubInfo text='Experience'/>
      <SubInfo text='Resume'/>
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

export default Profile