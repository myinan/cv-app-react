import { useState } from "react";
import "../styles/App.css";
import EditSection from "./sectionEdit";
import ResumeSection from "./sectionResume";
import personInfoData, { originalPersonInfoData } from "./personInfo";

function App() {
  const [personInfo, setPersonInfo] = useState(personInfoData);
  const [originalPersonInfo, setOriginalPersonInfo] = useState(
    originalPersonInfoData
  );
  const [resumeLayout, setResumeLayout] = useState("top");

  return (
    <div className="app">
      <EditSection
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
        setResumeLayout={setResumeLayout}
      />
      <ResumeSection personInfo={personInfo} resumeLayout={resumeLayout} />
    </div>
  );
}

export default App;
