import "../styles/sectionEdit.css";
import "../styles/customizeField.css";
import TemplateLoader from "./templateLoader";
import PersonalField from "./personalFieldEdit";
import EducationField from "./educationFieldEdit";
import ExperienceField from "./experienceFieldEdit";
import ContentCustomizePrintButtons, {
  CustomizationField,
} from "./contentCustomizePrint";
import { useState } from "react";

function EditSection({
  personInfo,
  setPersonInfo,
  originalPersonInfo,
  setOriginalPersonInfo,
}) {
  const [isSelected, setIsSelected] = useState("content");

  return (
    <div className="edit-section">
      <ContentCustomizePrintButtons setIsSelected={setIsSelected} />
      <TemplateLoader
        setPersonInfo={setPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
      {isSelected !== "content" ? (
        <CustomizationField />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default EditSection;
