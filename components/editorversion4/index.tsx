import axios from "axios";
import React, { useState } from "react";
import ReactQuill,{Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "../editorversion3/quill.imageUploader";

Quill.register("modules/imageUploader", ImageUploader);

interface IPostCreate {
  body: string;
}
type Props = {
  value: string;
  placeholder: string;
  onChange: OnChangeHandler;
};




  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    imageUploader: {
      upload: (file:any) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=6c9a9c68bb7e951b14acd17a6ff8699c",
            {
              method: "POST",
              body: formData
            }
          )
            .then(response => response.json())
            .then(result => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch(error => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    }
  };
  
  

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
 interface OnChangeHandler {
  (e: any): void;
}

  
const TextEditor: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <>
      <ReactQuill
      
      style={{ height: "300px" }}
        theme="snow"
        value={value || ''}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextEditor;