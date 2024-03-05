import { useState } from "react";
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

function EducationInstance({ personInfo, setPersonInfo, index }) {
  const deepClone = structuredClone(personInfo);
  const cur = deepClone.educationInfo[index];

  return (
    <div className="education-instance">
      <div className="input-group">
        <label htmlFor={`school-name:${index}`}>School</label>
        <input
          id={`school-name:${index}`}
          placeholder="School name"
          value={cur.schoolName}
          onChange={(e) => {
            cur.schoolName = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`degree:${index}`}>Degree</label>
        <input
          id={`degree:${index}`}
          placeholder="Degree"
          value={cur.degree}
          onChange={(e) => {
            cur.degree = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`start-date:${index}`}>Start Date</label>
        <input
          id={`start-date:${index}`}
          placeholder="Start date"
          value={cur.startDate}
          onChange={(e) => {
            cur.startDate = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`end-date:${index}`}>End Date</label>
        <input
          id={`end-date:${index}`}
          placeholder="End date"
          value={cur.endDate}
          onChange={(e) => {
            cur.endDate = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`location:${index}`}>Location</label>
        <input
          id={`location:${index}`}
          placeholder="Location"
          value={cur.location}
          onChange={(e) => {
            cur.location = e.target.value;
            setPersonInfo(deepClone);
          }}
        ></input>
      </div>
    </div>
  );
}

function EducationField({ personInfo, setPersonInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="education-details">
      <button onClick={toggleDropdown}>Education</button>
      {isOpen &&
        personInfo.educationInfo.map((instanceArr, index) => {
          return (
            <EducationInstance
              key={`${instanceArr.schoolName}` + `${instanceArr.degree}`}
              personInfo={personInfo}
              setPersonInfo={setPersonInfo}
              index={index}
            />
          );
        })}
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
