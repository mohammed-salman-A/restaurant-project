import React from "react";

const Footer = (props) => {
  return (
     <p>{props.year} - {props.footerText}</p>
  );
};

export default Footer;