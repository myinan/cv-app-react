import "../styles/sectionEdit.css";

function PersonalField() {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label htmlFor="full-name">Full name</label>
        <input id="full-name" placeholder="First and last name"></input>
      </div>

      <div className="input-group">
        <label htmlFor="mail">Email</label>
        <input id="mail" placeholder="Enter email"></input>
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" placeholder="Enter phone number"></input>
      </div>

      <div className="input-group">
        <label htmlFor="address">Address</label>
        <input id="address" placeholder="City, Country"></input>
      </div>
    </div>
  );
}

function EditSection() {
  return (
    <div class="edit-section">
      <PersonalField />
    </div>
  );
}

export default EditSection;
