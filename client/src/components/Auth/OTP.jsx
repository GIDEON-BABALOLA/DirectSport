import "../Styles/OTP.css"
import React, { useState, useRef, useEffect } from 'react';
const OTP = () => {
  const OTPinputs = useRef([]);
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [buttonActive, setButtonActive] = useState(false);
  useEffect(() => {
    OTPinputs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);

    const nextInput = OTPinputs.current[index + 1];

    if (value && nextInput) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    updateButtonState(newOtpValues);
  };

  const handleInputKeyUp = (index, e) => {
    if (e.key === 'Backspace') {
      const previousInput = OTPinputs.current[index - 1];

      if (previousInput) {
        OTPinputs.current[index].value = '';
        OTPinputs.current[index].setAttribute('disabled', true);
        previousInput.focus();

        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';

        setOtpValues(newOtpValues);
        updateButtonState(newOtpValues);
      }
    }
  };

  const updateButtonState = (otpValues) => {
    const isButtonActive = otpValues.every((value) => value !== ''); //true
    setButtonActive(isButtonActive);
  };

  const handleButtonClick = (e) => {
    e.preventDefault()
    alert('OTP Sent');
  };
  const otpBody = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#e0e0e0",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily:" 'Inter', sans-serif",

  }

  return ( 
  <div style={otpBody}>
    <div className="containerClass">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-mail mailbox"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke= {buttonActive ? "#ae0a53 " : "#100034"} 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
      <h4>Enter Your 4 Digit OTP</h4>

      <form className="form">
        <div className="input_field_box">
          {otpValues.map((value, index) => (
            <input className="otpInput"
              key={index}
              type="number"
              value={value}
              ref={(el) => (OTPinputs.current[index] = el)}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyUp={(e) => handleInputKeyUp(index, e)}
            />
          ))}
        </div>

        <button className="buttonMan" onClick={handleButtonClick} disabled={buttonActive ? false : true} style={{backgroundColor: buttonActive ? " #ae0a53" : "#b3899c"}}
        >
          Verify OTP
        </button>
      </form>
    </div>
    </div>
  );
};

export default OTP;
