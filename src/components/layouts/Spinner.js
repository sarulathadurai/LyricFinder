import React from 'react';
import spinner from "../../images/spinner.gif"

const Spinner = () => {
    return (
      <div>
        <img
          src={spinner}
          alt="spinner"
          style={{ width: "200px", margin: "40px auto", display: "block" }}
        />
      </div>
    );
}
 
export default Spinner;
