"use client"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react";
import Link from "next/link"
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
// import Script from "next/script";

export default function HomePage(){
    // const date = new Date();
    const [date, setDate] = useState(new Date);
    // const [dtype, setDtype] = useState(0);
    setTimeout(()=>setDate(new Date()),300)

    function MakeText1(ntime: Date){
        //ntime: nowtime
        //dtype: display type (0: normal, 1: 12.3 based, 2: december based)
        // const thedate = new Date(2024,11,3,0,0,0,0);
        return `${ntime.getFullYear()}년 ${ntime.getMonth()+1}월 ${ntime.getDate()}일 ${ntime.getHours()}시 ${ntime.getMinutes()}분 ${ntime.getSeconds()}초`
    }
    
    function MakeText2(ntime: Date){
        //ntime: nowtime
        //dtype: display type (0: normal, 1: 12.3 based, 2: december based)
        // const thedate = new Date(2025,2-1,13,5,0,0);
        const thedate = new Date("2025-02-13T05:00:00.000+09:00");
        const diff = Math.floor((ntime.getTime()-thedate.getTime())/1000)
        return `${Math.floor(diff/3600/24)}일 ${Math.floor(diff/3600%24)}시간 ${Math.floor(diff/60%60)}분 ${Math.floor(diff%60)}초`
        
    }
    

    return (<>
        <Head><title>현재 시각은</title>
        <meta property="og:title" content="현재 시각은" key="title" />
            </Head>
            <Row style={{padding:"10%"}}>
        <Row><h2>현재 시각은?</h2></Row>
    <Row style={{display:'flex', textAlign:"center"}}>
        <Col style={{width:"80%"}}>
        <h3 style={{marginBottom: 1.0+"em"}}>
        지금은 {MakeText1(date)} 입니다.</h3>
        <h4>
        고진수 서비스연맹 관광레저산업노조 세종호텔지부장이 </h4><h4>세종호텔 앞 지하차도 안내 구조물에서 고공농성을 한 지</h4>
        <h3 style={{marginTop: 0.5+"em", marginBottom: 0.5+"em"}}>
        {MakeText2(date)} 되었습니다.</h3>
        </Col>
    </Row>
    {/* <Row >
        {dtype==0?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(0)}>윤석열이 파면되었다면 지금은 몇시입니까?</Button>}
        {dtype==1?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(1)}>거짓말이야 나는 12월 3일을 벗어나지 못했어</Button>}
        {dtype==2?<></>:<Button style={{marginTop:0.3+"em", marginBottom:0.5+"em"}}onClick={()=>setDtype(2)}>거짓말이야 나는 12월을 벗어나지 못했어</Button>}
    </Row> */}
    <Row style={{marginTop:3+"em"}}>
        <p>Made by <Link target="_blank" href="https://x.com/isaack___">twitter:isaack___(토스트아재)</Link>, <Link target="_blank"href="https://x.com/guillotine_prof">twitter:guillotine_profs(단두대학교 교수회)</Link></p>
    </Row>
    </Row>
    <GoogleAnalytics gaId="G-EPXHNY8J0Y" />
    </>);
}