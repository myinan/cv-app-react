import "../styles/sectionResume.css";

function PersonalInfo({ personInfo }) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{personInfo.personalInfo.fullName}</h1>
      <div className="contact-info">
        <div className="mail-container">
          {personInfo.personalInfo.mail !== "" && (
            <div>{personInfo.personalInfo.mail}</div>
          )}
        </div>

        <div className="phone-container">
          {personInfo.personalInfo.phone !== "" && (
            <div>{personInfo.personalInfo.phone}</div>
          )}
        </div>

        <div className="address-container">
          {personInfo.personalInfo.address !== "" && (
            <div>{personInfo.personalInfo.address}</div>
          )}
        </div>
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

function ExperienceInfo({ personInfo }) {
  return (
    <div className="experience-info">
      <h1>Professional Experience</h1>
      <div className="experience-instances-container">
        {personInfo.experienceInfo.map((instance, index) => {
          return (
            <div className="experience-instance-resume" key={index}>
              <div className="experience-info-group">
                <p className="dates">
                  {instance.startDate} - {instance.endDate}
                </p>
                <p className="location">{instance.location}</p>
              </div>

              <div className="experience-info-group">
                <p className="companyName">{instance.companyName}</p>
                <p className="positionTitle">{instance.positionTitle}</p>
              </div>

              <p className="description">{instance.description}</p>
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
        <ExperienceInfo personInfo={personInfo} />
      </div>
    </div>
  );
}

export default ResumeSection;
