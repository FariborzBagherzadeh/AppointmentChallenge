import React from "react";

export const ContactForm = (props) => {
  const handleNameChange = (e) => {
    const value = e.target.value;
    props.setName(value);
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    props.setPhone(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    props.setEmail(value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={props.name}
        onChange={handleNameChange}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        onChange={handlePhoneChange}
        value={props.phone}
      />
      <input
        type="email"
        placeholder="Email"
        value={props.email}
        onChange={handleEmailChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
