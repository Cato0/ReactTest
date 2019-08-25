import React from 'react';
import './App.css';
import Grid from "./components/GridComp";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <Grid></Grid>
      <CourseList></CourseList>
    </div>
  );
}

export default App;
