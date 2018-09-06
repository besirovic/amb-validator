import React from 'react';

import QRReader from 'react-qr-reader';

import './scanner.css';

const Scanner = props => {
  const { delay = 100, onScan = () => {}, onError = () => {} } = props;

  return (
    <div className="qrcode-scanner">
      <QRReader delay={delay} onScan={onScan} onError={onError} />
    </div>
  );
};

export default Scanner;
