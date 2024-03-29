function PersonalField({ personInfo, setPersonInfo, setOriginalPersonInfo }) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label htmlFor="full-name">Full name</label>
        <input
          id="full-name"
          placeholder="First and last name"
          value={personInfo.personalInfo.fullName}
          onChange={(e) => {
            const obj = {
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                fullName: e.target.value,
              },
            };

            setPersonInfo(obj);
            setOriginalPersonInfo(obj);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="mail">Email</label>
        <input
          id="mail"
          placeholder="Enter email"
          value={personInfo.personalInfo.mail}
          onChange={(e) => {
            const obj = {
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                mail: e.target.value,
              },
            };

            setPersonInfo(obj);
            setOriginalPersonInfo(obj);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          placeholder="Enter phone number"
          value={personInfo.personalInfo.phone}
          onChange={(e) => {
            const obj = {
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                phone: e.target.value,
              },
            };

            setPersonInfo(obj);
            setOriginalPersonInfo(obj);
          }}
        ></input>
      </div>

      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="City, Country"
          value={personInfo.personalInfo.address}
          onChange={(e) => {
            const obj = {
              ...personInfo,
              personalInfo: {
                ...personInfo.personalInfo,
                address: e.target.value,
              },
            };

            setPersonInfo(obj);
            setOriginalPersonInfo(obj);
          }}
        ></input>
      </div>
    </div>
  );
}

export default PersonalField;
