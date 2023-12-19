import { useState } from "react";

const ContactForm = (props) => {
  const { subscribe } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const HandleSubmit = (e) => {
    console.log("first", email, name, subject, message);
    e.preventDefault();
    if (email === "" || name === "" || subject === "" || message === "") {
      return;
    }
    subscribe({
      EMAIL: email,
      NAME: name,
      SUBJECT: subject,
      MESSAGE: message,
    });
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };
  return (
    <form onSubmit={(e) => HandleSubmit(e)} className="php-email-form mt-4">
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          value={subject}
          className="form-control"
          onChange={(e) => setSubject(e.target.value)}
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          value={message}
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};
export default ContactForm;
