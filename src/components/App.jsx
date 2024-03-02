import { useState } from "react";
import "../styles/App.css";
import EditSection from "./sectionEdit";
import ResumeSection from "./sectionResume";

function App() {
  return (
    <div className="app">
      <EditSection />
      <ResumeSection />
    </div>
  );
}

export default App;
