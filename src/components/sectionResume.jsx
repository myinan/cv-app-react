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
              <div className="education-info-group">
                <p className="dates">
                  {instance.startDate} - {instance.endDate}
                </p>
                <p className="location">{instance.location}</p>
              </div>

              <div className="education-info-group">
                <p className="schoolName">{instance.schoolName}</p>
                <p className="degree">{instance.degree}</p>
              </div>
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
