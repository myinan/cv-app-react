import "../styles/sectionEdit.css";
import PersonalField from "./personalFieldEdit";
import EducationField from "./educationFieldEdit";

function EditSection({ personInfo, setPersonInfo }) {
  return (
    <div className="edit-section">
      <PersonalField personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <EducationField personInfo={personInfo} setPersonInfo={setPersonInfo} />
    </div>
  );
}

export default EditSection;
