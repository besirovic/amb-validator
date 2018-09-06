import React from 'react';

import './result-dialog.css';

const ResultDialog = props => {
  const { show, dismissDialog, valid } = props;

  return (
    <aside
      id="result-dialog"
      className={`mdc-dialog ${show === true ? 'mdc-dialog--open' : ''}`}>
      <div className="mdc-dialog__surface">
        <section className="mdc-dialog__body">
          <div
            className={`result-icon result-icon__${
              valid ? 'valid' : 'invalid'
            }`}>
            <i className={`mdi mdi-${valid ? 'check' : 'close'}-outline`} />
          </div>
          <h3
            className={`result-message result-message__${
              valid ? 'valid' : 'invalid'
            }`}>
            Your product is {!valid ? 'not' : ''} valid.
          </h3>
        </section>

        <footer className="mdc-dialog__footer">
          <button
            type="button"
            className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
            onClick={dismissDialog}>
            Close
          </button>
        </footer>
      </div>

      <div className="mdc-dialog__backdrop" />
    </aside>
  );
};

export default ResultDialog;
