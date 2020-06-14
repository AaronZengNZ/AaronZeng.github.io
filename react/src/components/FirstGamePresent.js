import React from "react";
import PropTypes from "prop-types";

const FirstGamePresent = ({
  clickTimes,
  keyPressTimes,
  pressedKey,
  secretKey,
  handleFieldChange,
}) => {
  return (
    <div className="mt-5 mb-5 pt-5 pb-5 pl-4 text-dark">
      <div className="text-primary mb-3">
        <h2>Secret key guess game!</h2>
        <div className="text-danger m-3">
          {secretKey
            ? "Secret key pressed, Game start now!"
            : "First person: Press a secret key first!"}
        </div>

        <div className="text-success">
          Other person: try to guess what key the first person pressed.
        </div>
      </div>
      {secretKey === pressedKey && (
        <>
          <h3 className="text-danger">Congratulation, you won!</h3>
          <div className="text-success">
            You've tried {keyPressTimes} times, your score is{" "}
            {100 - keyPressTimes}/100
          </div>
          Press Esc key to start the game again!
        </>
      )}
      {secretKey && secretKey !== pressedKey && (
        <div onClick={handleFieldChange}>
          Click Times: <span className="text-danger mr-3">{clickTimes}</span>
          Pressed Key: <span className="text-danger mr-3">{pressedKey}</span>
          Key Press Times: <span className="text-danger">{keyPressTimes}</span>
        </div>
      )}
    </div>
  );
};

FirstGamePresent.propTypes = {
  clickTimes: PropTypes.number,
};
export default FirstGamePresent;
