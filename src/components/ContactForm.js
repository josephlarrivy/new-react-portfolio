import { useState } from "react";
// import ApiRequest from "../../api";
import emailjs from 'emailjs-com';

// import './ContactForm.css'

const ContactForm = () => {

  const INITIAL_STATE = {
    'name': '',
    'email': '',
    'message': '',
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  // const navigate = useNavigate();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    emailjs.sendForm('service_yfh2nmo', 'template_8xoo1dd', evt.target, 'dOwl-x9RcwhboytS1')
    
    setFormData(INITIAL_STATE)
  }


  return (
    <form onSubmit={handleSubmit}>

      <div className="name-container">
        <label htmlFor="name" className="col-md-6">Name: </label>
        <br></br>
        <input
          required
          id={formData.name}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="name-input"
        />
      </div>

      <div className="email-container">
        <label htmlFor="email" className="col-md-6">Email: </label>
        <br></br>
        <input
          required
          id={formData.email}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
        />
      </div>

      <div className="message-container">
        <label htmlFor="message" className="col-md-6">Message: </label>
        <br></br>
        <textarea
          required
          id={formData.message}
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="message-input"
        />
      </div>


      <button className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm;