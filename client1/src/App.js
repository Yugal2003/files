import { useEffect, useRef, useState } from 'react';
import './App.css';
import { uploadFile } from './services/api';
import img from './img/file-sharing-img.jpg'

function App() {
  const [file,setFile] = useState("");
  const [result,setResult] = useState('');

  const fileInputRef = useRef();
  //when click on upload so file are fire with input type=file then catch the particular file in btn click event
  const onUploadClick = () =>{
    fileInputRef.current.click();
  }

  //we can use useEffect bcz we can caught an file so that file we generate an particular API for that file 
  useEffect (() => {
    const getImage = async() => {
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])
  return (
    <div className='container'> 
      <h1>File Sharing App</h1>
      <img src={img} alt='file-img-loading'/>
      <p id='ptag'>Upload And Download File Link</p>
      <button onClick={() => onUploadClick()}>Upload..</button>
      <input type='file'
      ref={fileInputRef}
      style={{display:"none"}}
      onChange={(e) => setFile(e.target.files[0])}
      />
      <a href={result}>Link : {result}</a>
    </div>
  );
}

export default App;
