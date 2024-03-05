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
      <div className="education-instances-container">
        {personInfo.educationInfo.map((instance, index) => {
          return (
            <div className="education-instance-resume" key={index}>
              <p>{instance.schoolName}</p>
              <p>{instance.degree}</p>
              <p>{instance.startDate}</p>
              <p>{instance.endDate}</p>
              <p>{instance.location}</p>
            </div>
          );
        })}
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
