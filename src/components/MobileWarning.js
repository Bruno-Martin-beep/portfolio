import React, { useEffect, useState, useRef } from "react";
import useDeviceDetect from "../hooks/useDeviceDetect";

const MobileWarning = () => {
  const [showWarning, setShowWarning] = useState(true);
  const deviceType = useDeviceDetect();
  const warning = useRef(null);

  const handleRemove = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (warning.current && !warning.current.contains(event.target)) {
        handleRemove();
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [warning]);

  if (!showWarning || deviceType !== "Mobile") return <></>;
  return (
    <div className="mobileDevice" ref={warning} onClick={handleRemove}>
      <p className="mobileDevice_text">
        This site was designed with landscape in mind, select "add to home
        screen" in options for a better mobile experience.
      </p>
    </div>
  );
};

export default MobileWarning;
