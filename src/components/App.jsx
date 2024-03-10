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
  const [resumeFont, setResumeFont] = useState("sans");

  return (
    <div className="app">
      <EditSection
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
        setResumeLayout={setResumeLayout}
        resumeFont={resumeFont}
        setResumeFont={setResumeFont}
      />
      <ResumeSection
        personInfo={personInfo}
        resumeLayout={resumeLayout}
        resumeFont={resumeFont}
      />
    </div>
  );
}

export default App;
