const emptyObj = {
  personalInfo: {
    fullName: "",
    mail: "",
    phone: "",
    address: "",
  },
  educationInfo: [],
  experienceInfo: [],
};

const templateObj = {
  personalInfo: {
    fullName: "John Doe",
    mail: "john.doe@gmail.com",
    phone: "+90 123 456 7889",
    address: "Bursa, Turkey",
  },
  educationInfo: [
    {
      schoolName: "London City University",
      degree: "Bachelors in Economics",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
    },
    {
      schoolName: "Istanbul University",
      degree: "Master's Degree in Math",
      startDate: "10/2020",
      endDate: "present",
      location: "Istanbul, TR",
    },
  ],
  experienceInfo: [
    {
      companyName: "Umbrella Inc.",
      positionTitle: "UX & UI Designer",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      description: `Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.`,
    },

    {
      companyName: "Black Mesa Labs",
      positionTitle: "UX Research Assistant",
      startDate: "04/2018",
      endDate: "02/2019",
      location: "Berlin, Germany",
      description: `Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.`,
    },
  ],
};

function TemplateLoader({ setPersonInfo, setOriginalPersonInfo }) {
  return (
    <div className="template-loader">
      <button
        className="clear-resume"
        type="button"
        onClick={() => {
          setPersonInfo(emptyObj);
          setOriginalPersonInfo(emptyObj);
        }}
      >
        Clear Resume
      </button>
      <button
        className="load-example"
        type="button"
        onClick={() => {
          setPersonInfo(templateObj);
          setOriginalPersonInfo(templateObj);
        }}
      >
        Load Example
      </button>
    </div>
  );
}

export default TemplateLoader;
