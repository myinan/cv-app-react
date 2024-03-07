import { useState } from "react";

function ExperienceInstance({
  personInfo,
  setPersonInfo,
  originalPersonInfo,
  setOriginalPersonInfo,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const deepClone = structuredClone(personInfo);
  const cur = deepClone.experienceInfo[index];

  const handleInputChange = (e, field) => {
    cur[field] = e.target.value;
    setPersonInfo(deepClone);
  };

  return activeIndex === null ? (
    <button onClick={() => setActiveIndex(index)}>{cur.companyName}</button>
  ) : activeIndex !== index ? null : (
    <div className="edEx-instance-edit">
      <div className="input-group">
        <label htmlFor={`company-name:${index}`}>Company name</label>
        <input
          id={`company-name:${index}`}
          placeholder="Company name"
          value={cur.companyName}
          onChange={(e) => handleInputChange(e, "companyName")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`position-title:${index}`}>Position Title</label>
        <input
          id={`position-title:${index}`}
          placeholder="Position Title"
          value={cur.positionTitle}
          onChange={(e) => handleInputChange(e, "positionTitle")}
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

      <div className="input-group">
        <label htmlFor={`description:${index}`}>Description</label>
        <textarea
          id={`description:${index}`}
          placeholder="Description"
          value={cur.description}
          rows={5}
          onChange={(e) => handleInputChange(e, "description")}
        ></textarea>
      </div>

      <div className="buttons-group">
        <button
          onClick={() => {
            deepClone.experienceInfo.splice(index, 1);
            setOriginalPersonInfo(deepClone);
            setPersonInfo(deepClone);
            setActiveIndex(null);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setPersonInfo(originalPersonInfo);
            setActiveIndex(null);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setOriginalPersonInfo(deepClone);
            setPersonInfo(deepClone);
            setActiveIndex(null);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

function AddExperiencePanel({
  personInfo,
  setPersonInfo,
  index,
  activeIndex,
  setActiveIndex,
}) {
  const deepClone = structuredClone(personInfo);
  const newExperienceInstance = {
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  };

  deepClone.experienceInfo[index] = newExperienceInstance;
  const cur = deepClone.experienceInfo[index];

  const handleInputChange = (e, field) => {
    cur[field] = e.target.value;
    setPersonInfo(deepClone);
  };

  return activeIndex === null ? (
    <div className="add-edEx-btn-container">
      <button onClick={() => setActiveIndex(index)}>+ Experience</button>
    </div>
  ) : activeIndex !== index ? null : (
    <div className="edEx-instance-edit">
      <div className="input-group">
        <label htmlFor={`company-name:${index}`}>Company name</label>
        <input
          id={`company-name:${index}`}
          placeholder="The name of the company"
          onChange={(e) => handleInputChange(e, "companyName")}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor={`position-title:${index}`}>Position Title</label>
        <input
          id={`position-title:${index}`}
          placeholder="Title of your position"
          onChange={(e) => handleInputChange(e, "positionTitle")}
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

      <div className="input-group">
        <label htmlFor={`description:${index}`}>Description</label>
        <textarea
          id={`description:${index}`}
          placeholder="Provide a short description..."
          rows={5}
          onChange={(e) => handleInputChange(e, "description")}
        ></textarea>
      </div>

      <div className="buttons-group">
        <button style={{ visibility: "hidden" }}>Delete</button>
        <button onClick={() => setActiveIndex(null)}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

function ExperienceField({
  personInfo,
  setPersonInfo,
  originalPersonInfo,
  setOriginalPersonInfo,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`edEx-details ${isOpen ? "open" : "closed"}`}>
      <button onClick={toggleDropdown}>
        <span>Experience</span>
      </button>
      {isOpen && (
        <>
          {personInfo.experienceInfo.map((instanceArr, index) => {
            return (
              <ExperienceInstance
                key={index}
                personInfo={personInfo}
                setPersonInfo={setPersonInfo}
                originalPersonInfo={originalPersonInfo}
                setOriginalPersonInfo={setOriginalPersonInfo}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            );
          })}
          <AddExperiencePanel
            key={personInfo.experienceInfo.length}
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            index={personInfo.experienceInfo.length}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </>
      )}
    </div>
  );
}

export default ExperienceField;
