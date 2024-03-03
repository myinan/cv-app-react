import "../styles/sectionResume.css";

function PersonalInfo({ personInfo }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{personInfo.personalInfo.fullName}</h1>
      <div className="contact-info">
        <div>{personInfo.personalInfo.mail}</div>
        <div>{personInfo.personalInfo.phone}</div>
        <div>{personInfo.personalInfo.address}</div>
      </div>
    </div>
  );
}

function EducationInfo({ personInfo }) {
  return (
    <div className="education-info">
      <h1>Education</h1>
      <div className="education-instance">
        <p>{personInfo.educationInfo[0].schoolName}</p>
        <p>{personInfo.educationInfo[0].degree}</p>
        <p>{personInfo.educationInfo[0].startDate}</p>
        <p>{personInfo.educationInfo[0].endDate}</p>
        <p>{personInfo.educationInfo[0].location}</p>
      </div>
    </div>
  );
}

function ResumeSection({ personInfo }) {
  return (
    <div className="resume-container">
      <div className="resume-section">
        <PersonalInfo personInfo={personInfo} />
        <EducationInfo personInfo={personInfo} />
      </div>
    </div>
  );
}

export default ResumeSection;
