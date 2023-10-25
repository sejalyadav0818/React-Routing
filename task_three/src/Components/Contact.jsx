import React from "react";
import { Link, useParams } from "react-router-dom";

const Contact = () => {
  const parms = useParams();
  const id = parms.id;

  return (
    <>
      {" "}
      <div>Contact</div>
      <h1>Hello Contact with id : {id}</h1>
      <Link to="/home">Back to HOme</Link>
    </>
  );
};

export default Contact;
