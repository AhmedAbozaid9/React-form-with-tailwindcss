import React from "react";
import "./FormInput";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form
          action="submit"
          className="my-5 mx-auto p-5 rounded-md drop-shadow-md bg-white max-w-2xl flex flex-col justify-center"
        >
          <h1 className="text-4xl text-center text-sky-600 font-bold mb-8">
            Welcome!
          </h1>

          <div className="flex justify-between">
            <FormInput content="First Name" type="text" />
            <FormInput content="Last Name" type="text" />
          </div>
          <FormInput content="Email" type="email" />
          <FormInput content="Password" type="password" />
          <FormButton content="Login" />
        </form>
      </div>
    );
  }
}
