import "../styles/sectionEdit.css";
import PersonalField from "./personalFieldEdit";
import EducationField from "./educationFieldEdit";
import ExperienceField from "./experienceFieldEdit";

function EditSection({
  personInfo,
  setPersonInfo,
  originalPersonInfo,
  setOriginalPersonInfo,
}) {
  return (
    <div className="edit-section">
      <PersonalField
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
      <EducationField
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
      <ExperienceField
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
    </div>
  );
}

export default EditSection;
