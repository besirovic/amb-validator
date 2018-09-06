import React from 'react';

import './start-button.css';

const StartButton = props => {
  const { onClick } = props;
  return (
    <button
      className="mdc-fab mdc-fab--extended mdc-ripple-upgraded start-btn"
      onClick={onClick}>
      <i className="mdc-fab__icon mdi mdi-qrcode-scan" />
      <span className="mdc-fab__label">Scan your product</span>
    </button>
  );
};

export default StartButton;
