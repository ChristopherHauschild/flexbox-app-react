import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center flex-shrink-0 text-white">
      <i className="fa fa-cube fa-2x" aria-hidden="true"></i>
      <span className="ml-3 text-xl sm:text-2xl tracking-tight">
        <a href='/'>Flexbox Simulator</a>
      </span>
    </div>
  )
}

export default Logo