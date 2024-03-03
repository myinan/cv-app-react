import "../styles/sectionEdit.css";

function PersonalField({ personInfo, setPersonInfo }) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label htmlFor="full-name">Full name</label>
        <input
          id="full-name"
          placeholder="First and last name"
          value={personInfo.personalInfo.fullName}
          onChange={(e) =>
            setPersonInfo({
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                fullName: e.target.value,
              },
            })
          }
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="mail">Email</label>
        <input
          id="mail"
          placeholder="Enter email"
          value={personInfo.personalInfo.mail}
          onChange={(e) =>
            setPersonInfo({
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                mail: e.target.value,
              },
            })
          }
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          placeholder="Enter phone number"
          value={personInfo.personalInfo.phone}
          onChange={(e) =>
            setPersonInfo({
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                phone: e.target.value,
              },
            })
          }
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="City, Country"
          value={personInfo.personalInfo.address}
          onChange={(e) =>
            setPersonInfo({
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                address: e.target.value,
              },
            })
          }
        ></input>
      </div>
    </div>
  );
}

function EducationField({ personInfo, setPersonInfo }) {
  const deepClone = structuredClone(personInfo);

  return (
    <div className="education-details">
      <h2>Education</h2>

      <div className="input-group">
        <label htmlFor="school-name">School</label>
        <input
          id="school-name"
          placeholder="School name"
          value={personInfo.educationInfo[0].schoolName}
          onChange={(e) => {
            deepClone.educationInfo[0].schoolName = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          placeholder="Degree"
          value={personInfo.educationInfo[0].degree}
          onChange={(e) => {
            deepClone.educationInfo[0].degree = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          placeholder="Start date"
          value={personInfo.educationInfo[0].startDate}
          onChange={(e) => {
            deepClone.educationInfo[0].startDate = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="end-date">End Date</label>
        <input
          id="end-date"
          placeholder="End date"
          value={personInfo.educationInfo[0].endDate}
          onChange={(e) => {
            deepClone.educationInfo[0].endDate = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          placeholder="Location"
          value={personInfo.educationInfo[0].location}
          onChange={(e) => {
            deepClone.educationInfo[0].location = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>
    </div>
  );
}

function EditSection({ personInfo, setPersonInfo }) {
  return (
    <div className="edit-section">
      <PersonalField personInfo={personInfo} setPersonInfo={setPersonInfo} />
      <EducationField personInfo={personInfo} setPersonInfo={setPersonInfo} />
    </div>
  );
}

export default EditSection;
