import "../styles/sectionResume.css";

function PersonalInfo() {
  return <div className="personal-info"></div>;
}

function ResumeSection() {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <PersonalInfo />
      </div>
    </div>
  );
}

export default ResumeSection;
