import React, { useState} from 'react'
import { Button, Spin , Table, Tag, Space} from 'antd'
import axios from 'axios'
import './index.css'


type commentTableObject = {
    key: string,
    comments : string,
    types : string,
    percentage : string,
    tags: string[]
}
const { Column, ColumnGroup } = Table;
const url ="http://localhost:5000"
const AuthorAdminCommentPage = () => {
    const [dataList, setDataList] = useState<commentTableObject[]>([])
    const [storyDataList, setStoryDataList] = useState<commentTableObject[]>([])
    const [drawDataList, setDrawDataList] = useState<commentTableObject[]>([])
    const [loadingToggle, setLoadingToggle] = useState(false)
    const onStoryButtonHandler = async (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setLoadingToggle(true)
        if(storyDataList.length !== 0){
            setLoadingToggle(false)
            setDataList([...storyDataList])
            return
        }
        const res = await axios.get(url+'/nlp/comment_classify')
        console.log(res)
        if(res === undefined || res === null) return;
        setLoadingToggle(false)
        processDataHandler(res.data.label_0,res.data.label_1 ,0)
    }
    const onDrawingButtonHandler = async (event : React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setLoadingToggle(true)
        if(drawDataList.length !== 0){
            setLoadingToggle(false)
            setDataList([...drawDataList])
            return
        }
        const res = await axios.get(url+'/nlp/comment_classify')
        if(res === undefined || res === null) return;
        setLoadingToggle(false)
        processDataHandler(res.data.label_0,res.data.label_1, 1)
        setDataList([...drawDataList])
    }
    const processDataHandler = (firstList : string[][], secondList : string[][], which : number) => {
        let temp : commentTableObject[] = []
        firstList.forEach((value: string[], index: number) => {
            const key = index.toString()
            const comments = value[0]
            const types = "스토리"
            const percentage = (Number(value[2])*100).toString() 
            let tags : string[] = []
            if(Number(percentage) > 99) {
                tags.push("Perfect")
                tags.push("Excellent")
                tags.push("Nice")
            }
            else if(Number(percentage) > 95){
                tags.push("Excellent")
                tags.push("Nice")
            }
            else if(Number(percentage) > 90){
                tags.push("Nice")
            }
            else if(Number(percentage) > 85){
                tags.push("Medium")
            }else{
                tags.push("MayBe")
            }
            
            temp.push({key,comments,types,percentage, tags})
        });
        if(which === 0){
            setDataList([...temp])
        }
        setStoryDataList([...temp])
        temp.length = 0;
        secondList.forEach((value: string[], index: number) => {
            const key = index.toString()
            const comments = value[0]
            const types = "그림"
            const percentage = (Number(value[2])*100).toString()
            let tags : string[] = []
            if(Number(percentage) > 99) {
                tags.push("Perfect")
                tags.push("Excellent")
                tags.push("Nice")
            }
            else if(Number(percentage) > 95){
                tags.push("Excellent")
                tags.push("Nice")
            }
            else if(Number(percentage) > 90){
                tags.push("Nice")
            }
            else if(Number(percentage) > 85){
                tags.push("Medium")
            }else{
                tags.push("MayBe")
            }

            temp.push({key,comments,types,percentage, tags})
        });
        if(which === 1){
            setDataList([...temp])
        }
        setDrawDataList([...temp])
    }
    return (
        <div className="author-admin-page-comment-nlp-container">
            <Button onClick={onStoryButtonHandler}>스토리 관련 덧글</Button>
            <Button onClick={onDrawingButtonHandler}>그림체 관련 덧글</Button>
            <Table dataSource={dataList} loading={loadingToggle}>
                <Column title="comments" dataIndex="comments" key="comments" />
                <Column title="types" dataIndex="types" key="types" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map((value: any | null | undefined) => (
                                <Tag color="blue" key={value}>
                                {value}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="정확도"
                    key="percentage"
                    render={(text, record : any | null | undefined ) => (
                        <Space size="middle">
                          {record.percentage}%
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default AuthorAdminCommentPage