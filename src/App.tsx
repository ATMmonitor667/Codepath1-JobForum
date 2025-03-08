import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import './App.css'
import DashBoard from "./components/DashBoard"
function App() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <>
      <h1>Job Search</h1>
      <SearchBar onSearch = {handleSearch}></SearchBar>
      <DashBoard></DashBoard>
    </>
  )
}

export default App
