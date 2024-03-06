import "../styles/sectionEdit.css";
import PersonalField from "./personalFieldEdit";
import EducationField from "./educationFieldEdit";

function EditSection({
  personInfo,
  setPersonInfo,
  originalPersonInfo,
  setOriginalPersonInfo,
}) {
  return (
    <div className="edit-section">
      <PersonalField personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <EducationField
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        originalPersonInfo={originalPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
    </div>
  );
}

export default EditSection;
