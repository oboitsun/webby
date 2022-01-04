import React from "react";

function Input({ domain, placeholder = "" }) {
  return (
    <div className="FreeTrialPopup__input-wrapper relative px-5 py-4 grid grid-cols-[1fr,max-content] border rounded-lg border-lightGray items-center">
      <input
        placeholder={placeholder}
        className="FreeTrialPopup__input appearance-none placeholder:text-sm leading-none text-sm "
      />
      {domain && (
        <p className="text-green text-sm font-bold leading-none ">.webby.nz</p>
      )}
    </div>
  );
}

export default Input;
