import React from "react";

const MenuMobile = () => {
  return (
    <div className="flex flex-col mt-4 items-center w-full h-screen">
      <div className="text-2xl mt-48 mb-6 text-white">
        <a href='/'>
          Sobre
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ChristopherHauschild/flexbox-app-react"
          className="transition ease-in-out duration-700 text-2xl px-8 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
        >
          Código
        </a>
      </div>
    </div>
  );
};

export default MenuMobile;
