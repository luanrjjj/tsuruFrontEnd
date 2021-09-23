import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import { Button, Form, Input, Select, Typography } from 'antd';
const { Option } = Select;

import {
  
    
    FormSection,
    ThreadCreateSection,
} from './styles'


import ReactQuill from 'react-quill';
import Header from '../../components/header';

import dynamic from 'next/dynamic';
import logoImg from '../../assets/images/origami.png';
import api from '../../services/api';


const TextEditor = dynamic(()=> import('../../components/editorversion4/index'),{ssr:false});



const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;


interface IPostCreate {
  body: string;
}


const CreateThreads:React.FC = () => {
  const [form] = Form.useForm();
  const [categories,setCategories] = useState<any>([])
  const [value, setValue] = useState();
  const [threadCreated,setThreadCreated] = useState<any>([])

  let formResult:any =[ ]
   const onSubmit =  async (values: IPostCreate) => {
    // logic to submit form to server
    formResult.push(values)
    console.log(formResult)
    let formResultFormatted:any = {
      'category':formResult[0]?.category,
      'title':formResult[1]?.Title,
      'body':formResult[1]?.body
    }
    

   
    
    console.log('dois',formResultFormatted)

    api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    await api.post('api/threads/store',formResultFormatted).then(response => {
      console.log(response)
    })
    form.resetFields();
  };

  const style = {
    editor: {
      height:"140px"
    }
  }

/*
  useEffect(() => {
    api.get('/api/categories').then(response=>  {
      setCategories(response.data)
     
   })
 },[])

*/




  return (
    <>

    <Header/>
       <ThreadCreateSection>
       <h1>Publique sua dúvida</h1>
         <FormSection>
    

      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Item name ="Title" label ="Título" required tooltip="This is a required field">
          <Input placeholder="Input Placeholder"/>
        </Item>
        <Form.Item  label="Escolha o assunto" required tooltip="This is a required field">
        <Input.Group compact>
          
        <Select onChange={(value) => {
      formResult.push({"category":value})
    }} placeholder="Escolha a disciplina">
          <Option value ="Logaritmos">Logaritmos </Option>
          <Option value ="Afim">Função Afim </Option>
          <Option value ="Potenciação">Potenciação </Option>
          <Option value ="Radiciação">Radiciação </Option>
          <Option value ="Exponencial">Exponencial </Option>
          <Option value ="Polinômios">Polinômios </Option>    
        </Select>
      
         
          <Form.Item>
           
          </Form.Item>
        </Input.Group>
      </Form.Item>

        <Item
          name="body"
          rules={[
            {
              required: false,
              message: 'Please enter body of post',
            },
          ]}
        >
          {/* @ts-ignore */}
          <TextEditor/>
        </Item>

        <Item>
         
          <Button htmlType="submit" type="primary" style={{marginTop:40}}>
            Submit
          </Button>
        </Item>
      </Form>
      </FormSection>
      </ThreadCreateSection>

    </>
  );
};


export default CreateThreads;