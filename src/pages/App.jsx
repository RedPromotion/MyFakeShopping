import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//페이지
/***********************************************
@page App.js
@description 실질적인 시작페이지
***********************************************/
export default function App() {
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Link className="App-link" to="/Start">
        Go to Start Page
        </Link>
    </header>
    {/* 페이지 라우팅 설정 */}
    </div>
  );
}