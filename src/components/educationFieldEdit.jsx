import { useState } from "react";

function EducationInstance({
  personInfo,
  setPersonInfo,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const deepClone = structuredClone(personInfo);
  const cur = deepClone.educationInfo[index];

  const handleInputChange = (e, field) => {
    cur[field] = e.target.value;
    setPersonInfo(deepClone);
  };

  return activeIndex === null ? (
    <button onClick={() => setActiveIndex(index)}>{cur.schoolName}</button>
  ) : activeIndex !== index ? null : (
    <div className="education-instance-edit">
      <div className="input-group">
        <label htmlFor={`school-name:${index}`}>School</label>
        <input
          id={`school-name:${index}`}
          placeholder="School name"
          value={cur.schoolName}
          onChange={(e) => handleInputChange(e, "schoolName")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`degree:${index}`}>Degree</label>
        <input
          id={`degree:${index}`}
          placeholder="Degree"
          value={cur.degree}
          onChange={(e) => handleInputChange(e, "degree")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`start-date:${index}`}>Start Date</label>
        <input
          id={`start-date:${index}`}
          placeholder="Start date"
          value={cur.startDate}
          onChange={(e) => handleInputChange(e, "startDate")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`end-date:${index}`}>End Date</label>
        <input
          id={`end-date:${index}`}
          placeholder="End date"
          value={cur.endDate}
          onChange={(e) => handleInputChange(e, "endDate")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`location:${index}`}>Location</label>
        <input
          id={`location:${index}`}
          placeholder="Location"
          value={cur.location}
          onChange={(e) => handleInputChange(e, "location")}
        ></input>
      </div>

      <div className="buttons-group">
        <button>Delete</button>
        <button onClick={() => setActiveIndex(null)}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

function AddEducationPanel({
  personInfo,
  setPersonInfo,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const deepClone = structuredClone(personInfo);
  const newEducationInstance = {
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  };
  deepClone.educationInfo[index] = newEducationInstance;
  const cur = deepClone.educationInfo[index];

  const handleInputChange = (e, field) => {
    cur[field] = e.target.value;
    setPersonInfo(deepClone);
  };

  return activeIndex === null ? (
    <div className="add-education-btn-container">
      <button onClick={() => setActiveIndex(index)}>+ Education</button>
    </div>
  ) : activeIndex !== index ? null : (
    <div className="education-instance-edit">
      <div className="input-group">
        <label htmlFor={`school-name:${index}`}>School</label>
        <input
          id={`school-name:${index}`}
          placeholder="School name"
          onChange={(e) => handleInputChange(e, "schoolName")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`degree:${index}`}>Degree</label>
        <input
          id={`degree:${index}`}
          placeholder="Degree"
          onChange={(e) => handleInputChange(e, "degree")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`start-date:${index}`}>Start Date</label>
        <input
          id={`start-date:${index}`}
          placeholder="Start date"
          onChange={(e) => handleInputChange(e, "startDate")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`end-date:${index}`}>End Date</label>
        <input
          id={`end-date:${index}`}
          placeholder="End date"
          onChange={(e) => handleInputChange(e, "endDate")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`location:${index}`}>Location</label>
        <input
          id={`location:${index}`}
          placeholder="Location"
          onChange={(e) => handleInputChange(e, "location")}
        ></input>
      </div>

      <div className="buttons-group">
        <button>Delete</button>
        <button onClick={() => setActiveIndex(null)}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

function EducationField({ personInfo, setPersonInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="education-details">
      <button onClick={toggleDropdown}>Education</button>
      {isOpen && (
        <>
          {personInfo.educationInfo.map((instanceArr, index) => {
            return (
              <EducationInstance
                key={index}
                personInfo={personInfo}
                setPersonInfo={setPersonInfo}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            );
          })}
          <AddEducationPanel
            key={personInfo.educationInfo.length}
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            index={personInfo.educationInfo.length}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </>
      )}
    </div>
  );
}

export default EducationField;
