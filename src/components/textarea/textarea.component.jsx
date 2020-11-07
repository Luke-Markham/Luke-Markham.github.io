import React from "react";
import "./textarea.styles.scss";

const Textarea = props => {
  const { handleFields, message } = props;
  return (
    <textarea
      value={message}
      name="message"
      rows="6"
      onChange={handleFields}
      placeholder="Enter Your Message..."
      required
    />
  );
};
export default Textarea;
