import React from "react";
import Button from "./Button";
import LoginInput from "./LoginInput";
import Input from "./LoginInput";
import RegisterInput from "./RegisterInput";

function loginForm() {

  return (
    <div className="w-full max-w-sm">
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <LoginInput />
        <Button />
      </form>
    </div>
  );
}

export default loginForm;
