import React from "react";
const FormInput = (props) => {
  return (
    <div className="my-2">
      <label
        htmlFor={props.content.trim()}
        className="text-sky-500 font-semibold text-lg"
      >
        {props.content}
      </label>
      <input
        className="outline-none rounded-sm border-b-2 border-sky-500 w-full p-2 text-lg focus:bg-sky-100 "
        type={props.type}
        id={props.content.trim()}
      />
    </div>
  );
};

export default FormInput;
