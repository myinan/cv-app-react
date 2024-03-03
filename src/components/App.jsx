import { useState } from "react";
import "../styles/App.css";
import EditSection from "./sectionEdit";
import ResumeSection from "./sectionResume";

function App() {
  const [personInfo, setPersonInfo] = useState({
    personalInfo: {
      fullName: "Yasir İnan",
      mail: "m.yasir.inan@gmail.com",
      phone: "+90 123 456 7889",
      address: "Bursa, Turkey",
    },
    educationInfo: [
      {
        schoolName: "London City University",
        degree: "Bachelors in Economics",
        startDate: "08/2020",
        endDate: "present",
        location: "New York City, US",
      },
    ],
    experienceInfo: [],
  });

  return (
    <div className="app">
      <EditSection personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <ResumeSection personInfo={personInfo} />
    </div>
  );
}

export default App;
