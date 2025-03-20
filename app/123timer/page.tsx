"use client"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import Link from "next/link"
import Head from 'next/head'

function MakeText(ntime: Date, dtype:number){
    //ntime: nowtime
    //dtype: display type (0: normal, 1: 12.3 based, 2: december based)
    const thedate = new Date(2024,11,3,0,0,0,0);
    const diff = Math.floor((ntime.getTime()-thedate.getTime())/1000)
    if(dtype==0){
        return `${ntime.getFullYear()}년 ${ntime.getMonth()+1}월 ${ntime.getDate()}일 ${ntime.getHours()}시 ${ntime.getMinutes()}분 ${ntime.getSeconds()}초`
    }
    if(dtype==1){
        const hour = (Math.floor(diff/3600)).toFixed(0);
        const minute = (Math.floor(diff/60)%60).toFixed(0);
        const second = (diff%60).toFixed(0);
        return `2024년 12월 3일 ${hour}시 ${minute}분 ${second}초`
    }
    if(dtype==2){
        const date = (Math.floor(diff/3600/24)+2).toFixed(0);
        const hour = (Math.floor(diff/3600)%24).toFixed(0);
        const minute = (Math.floor(diff/60)%60).toFixed(0);
        const second = (diff%60).toFixed(0);
        return `2024년 12월 ${date}일 ${hour}시 ${minute}분 ${second}초`
    }
    return "모르겠는"
}

export default function HomePage(){
    // const date = new Date();
    const [date, setDate] = useState(new Date);
    const [dtype, setDtype] = useState(0);
    setTimeout(()=>setDate(new Date()),300)

    return (<>
        <Head><title>현재 시각은</title>
        <meta property="og:title" content="현재 시각은" key="title" />
            </Head><Row style={{padding:"10%"}}>
        <Row><h2>현재 시각은?</h2></Row>
    <Row style={{display:'flex', textAlign:"center"}}>
        <Col style={{width:"80%"}}>
        <h3>
        지금은 {MakeText(date, dtype)} 입니다.</h3>
        </Col>
    </Row>
    <Row >
        {dtype==0?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(0)}>윤석열이 파면되었다면 지금은 몇시입니까?</Button>}
        {dtype==1?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(1)}>거짓말이야 나는 12월 3일을 벗어나지 못했어</Button>}
        {dtype==2?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(2)}>거짓말이야 나는 12월을 벗어나지 못했어</Button>}
    </Row>
    <Row style={{marginTop:3+"em"}}>
        <p>Made by <Link target="_blank" href="https://x.com/isaack___">twitter:isaack___(토스트아재)</Link>, <Link target="_blank"href="https://x.com/guillotine_prof">twitter:guillotine_profs(단두대학교 교수회)</Link></p>
    </Row>
    </Row>
    </>);
}