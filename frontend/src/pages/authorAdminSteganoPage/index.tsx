import React, { useState,useEffect } from 'react'
import './index.css'
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios'
import person from './img/person.png'
const { Dragger } = Upload;
const url ="http://localhost:5000"
const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}

const AuthorAdminSteganoPage = () => {
    const [mode, setMode] = useState("encoder")
    const [filePath, setfilePath] = useState("")
    const [secretKey, setSecreKey] = useState("text")
    const [publicKey, setPublicKey] = useState<string | Blob>()
    const [privateKey, setPrivateKey] = useState<string | Blob>()
    useEffect(()=>{
        onAuthHandler().then((res) =>{
            setPublicKey(res.publicKey)
            setPrivateKey(res.privateKey)
        })
    },[])
    const onAuthHandler = async () => {
        return await axios("/api/users/auth").then(res=> {return res.data})
    }
    const onEncodeMode = () =>{
        setMode("encoder")
    }
    const onDecodeMode = () => {
        setMode("decoder")
    }
    const options = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info : any) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            console.log(info.file.originFileObj)
            let reader = new FileReader()
            reader.onload = async function(event){
                let base64data = event?.target?.result as string
                let formData = new FormData()
                console.log(base64data)
                if(base64data != null){
                    formData.append("userImage", base64data)
                    if(mode === "encoder"){
                        if(publicKey === undefined) return;
                        formData.append("userKey", publicKey)
                        const res = await axios.post(url+'/gan/stegano_encode', formData, config)
                        console.log(res)
                    }
                    else if(mode === "decoder"){
                        const res = await axios.post(url+'/gan/stegano_decode', formData, config)
                        const data = await res.data
                        console.log(data)
                        setSecreKey(data.text)
                    }

                }
            }
            reader.readAsDataURL(info.file.originFileObj)
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return (
        <div className="author-admin-stegano-lab-container">
            <div className="author-admin-stegano-lab-btns">
                <Button onClick={onEncodeMode}>Encoder</Button>
                <Button onClick={onDecodeMode}>Decoder</Button>
            </div>
            <div className="author-admin-stegano-lab-encoder-container">
                <div className="author-admin-stegano-lab-upload">
                    <Dragger {...options}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                        {`Your Public key(${publicKey}) will hide in image `}
                        </p>
                    </Dragger>
                </div>
                { mode === "encoder" ? <div className="wrapper-dropbox">
                        <img className="author-admin-stegano-lab-encoder-result-image" src={filePath === '' ? person : filePath} alt="cloud_image"/>
                        <h3 className="cloud-text">Result Image</h3>
                    </div> :
                    <div className="author-admin-stegano-lab-decoder-container">
                        {secretKey}
                    </div>
                }
            </div>
        </div>
    )
}

export default AuthorAdminSteganoPage