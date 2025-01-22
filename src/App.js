import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Button, Tab, Tabs } from '@mui/material';
//페이지
import AppJSX from '../src/pages/App'
import StartPage from '../src/pages/StartPage'
import BoardPage from '../src/pages/BoardPage'
import ImageCard from '../src/pages/ImageCard'
import ShopPage from '../src/pages/ShopPage'
/***********************************************
@page App.js
@description 실질적인 시작페이지
***********************************************/
export default function App() {
  const [value, setValue] = useState(0); // 초기값을 0으로 설정
  const handleChange = (event, newValue) => {
    setValue(newValue); // 선택된 탭 인덱스를 업데이트
  };
  return (
    <Router>
      <Box margin={2}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="start" component={Link} to="/Start" />
          <Tab label="BoardPage" component={Link} to="/BoardPage" />
          <Tab label="ImageCard" component={Link} to="/ImageCard" />
          <Tab label="ShopPage" component={Link} to="/ShopPage" />
        </Tabs>
        <Routes>
          <Route path="/" element={<AppJSX />} />
          <Route path="/Start" element={<StartPage />} />
          <Route path="/BoardPage" element={<BoardPage />} />
          <Route path="/ImageCard" element={<ImageCard />} />
          <Route path="/ShopPage" element={<ShopPage />} />
        </Routes>
      </Box>
    </Router>
  );
}