import React, { useState } from 'react';
import './RegistrationForm.css';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    website:'',
    image: '',
    gender: 'male',
    skills: {
      html: false,
      css: false,
      javaScript: false,
    },
  });

  const [submittedData, setSubmittedData] = useState([]);
  
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [name]: checked,
        },
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
        Name: '',
        email: '',
        website:'',
        image: '',
        gender: 'male',
        skills: {
          html: false,
          css: false,
          javaScript: false,
      },
    });
  };

  const handleClear = () => {
    setFormData({
        Name: '',
        email: '',
        website:'',
        image: '',
        gender: 'male',
        skills: {
          html: false,
          css: false,
          javaScript: false,
      },
    });
  };

  return (
    <div className="container">
      <h1>Register Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="div-grp"> 
        <label for name="name" >Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="John Doe"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
    
        <div className="div-grp">
        <label for name="email" >Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="div-grp">
        <label for name="website" >website:</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="www.johndoe.com"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </div>
        <div className="div-grp">
          <label for="image">Profile Image:</label>
          <input className=" img"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
          </div>
        <div className="div-grp gender">
          <label for="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="skills">
          <label>Skills:</label>
          <div className="skill">
            <label for="html">
              <input
                type="checkbox"
                id="html"
                name="html"
                checked={formData.skills.html}
                onChange={handleChange}
              />
             HTML
            </label>
            <label for="css">
              <input
                type="checkbox"
                id="css"
                name="css"
                checked={formData.skills.css}
                onChange={handleChange}
              />
              CSS
            </label>
            <label for="javascript">
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                checked={formData.skills.javascript}
                onChange={handleChange}
              />
              javaScript
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Enroll Now
        </button>
        <button type="button" className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </form>
      <div id="displayData" className="submitted-data">
        
        {submittedData.map((data, index) => (
          <div key={index} className="enrolled-entry">
          <h2>Enrolled Data</h2>
            <h3>Entry {index + 1}</h3>
            <p> Name: {data.Name}</p>
            <p>Email: {data.email}</p>
            <p>website: {data.website}</p>
            <p>Gender: {data.gender}</p>
            <p>Skills:</p>
            <ul>
              {Object.entries(data.skills).map(([skill, isChecked]) =>
                isChecked ? <li key={skill}>{skill}</li> : null
              )}
            </ul>
            {data.image && (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Profile"
                width="100"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationForm;
