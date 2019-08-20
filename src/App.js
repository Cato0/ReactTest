import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CourseList></CourseList>
    </div>
  );
}

export default App;
