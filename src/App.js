import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// BrowserRouter : history API 를 이용해 URL&UI 동기화하는 라우터
// Routes : 자식 컴포넌트 Route/Redirect 중 매치되는 첫번째 요소 렌더링,
//          하나의 매칭되는 요소만 렌더링 (사용 안할 시 매칭되는 모든 것을 렌더링)
// Route : path 에 설정한 URL 과 현재 경로 일치 시 해당 컴포넌트, 함수 렌더링
// Link : 'a' 태그와 비슷한 역할, to 속성으로 설정된 링크로 이동, history 스택에 저장됨
// 컴포넌트 : 리액트를 이루는 최소한의 단위,
//          재사용이 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩
//          UI 를 이루는 단위 - 로그인, 로그아웃, 홈, 보드 컴포넌트

import Login from './components/Login';
import Logout from './components/Logout';
import Dash_dev from './components/Dash_dev';
import Dash_ops from './components/Dash_ops';
import Dash_admin from './components/Dash_admin';
function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/dash_dev" element={<Dash_dev/>}/>
          <Route path="/dash_ops" element={<Dash_ops/>}/>
          <Route path="/dash_admin" element={<Dash_admin/>}/>
        </Routes>
      </Router>
  );
}

export default App;
