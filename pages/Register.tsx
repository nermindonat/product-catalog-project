import React from "react";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
    <Header />
    <div className="flex mt-20  items-center justify-center">
      <RegisterForm />
    </div>
    </>
    
  );
}

export default Register;
