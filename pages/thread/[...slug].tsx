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
import { Router, useRouter } from "next/router";
import Head from "next/head";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

const TextEditor = dynamic(()=> import('../../components/editorversion4/index'),{ssr:false});



const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;


interface IPostCreate {
  body: string;
}


export default function  Thread ({thread}:any){
  console.log('aqui',thread)
  const router = useRouter()
  const {slug} = router.query
  if(slug)
  console.log(slug[0])
  
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
      

    </>
  );
};


export const getServerSideProps:any = async ({params}:any) => {
  
  const {slug} = params
  
  if(slug) 
 

  
  try {
    let id = slug[0];
    const response = await api.get(`/api/thread/replies/${slug}`)
    const thread  = response.data;
  
    return { 
      props: {
        thread
      }
          }
   
      }catch (error) {
        console.log(error)
      }
    
 
}

