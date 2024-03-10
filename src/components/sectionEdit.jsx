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
  setResumeLayout,
  resumeFont,
  setResumeFont,
}) {
  const [isSelected, setIsSelected] = useState("content");

  return (
    <div className="edit-section">
      <ContentCustomizePrintButtons
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <TemplateLoader
        setPersonInfo={setPersonInfo}
        setOriginalPersonInfo={setOriginalPersonInfo}
      />
      {isSelected !== "content" ? (
        <CustomizationField
          resumeFont={resumeFont}
          setResumeLayout={setResumeLayout}
          setResumeFont={setResumeFont}
        />
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
