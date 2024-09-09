import React from "react";

const Gridlights = ({ filled, onClick, isdisabled, label }) => {
  return (
    <div>
      <button
        type="button"
        className={filled ? "cell cell-activated" : "cell"}
        onClick={onClick}
        disabled={isdisabled}
        aria-label={label}
      />
    </div>
  );
};

export default Gridlights;
