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

  return (
    <div className="app">
      <EditSection
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
      <ResumeSection personInfo={personInfo} />
    </div>
  );
}

export default App;
