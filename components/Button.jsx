import React from 'react';

const Button = ({ classStyles, btnName, handleClick, cancelBg }) => (
  <button
    type="button"
    className={cancelBg ? `text-lg minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-white border-white border-2 shadow-md ${classStyles}`
                        :`text-lg minlg:text-lg font-poppins font-semibold px-6 py-2 minlg:px-8 text-prim-black-1 bg-white shadow-md   ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
