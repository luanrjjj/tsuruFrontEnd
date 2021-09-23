import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
// #1 import quill-image-uploader
import ImageUploader from "./quill.imageUploader";

// #2 register module
Quill.register("modules/imageUploader", ImageUploader);

class TextEditor extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      text: ""
    };
  }

  modules = {
    // #3 Add "image" to the toolbar
    toolbar: [["bold", "italic", "image"]],
    // # 4 Add module and upload function
   
    
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
     // #5 Optinal if using custom formats
  ];

  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={(this.state as any).text}
      >
        <div className="my-editing-area" />
      </ReactQuill>
    );
  }
}

export default TextEditor;
