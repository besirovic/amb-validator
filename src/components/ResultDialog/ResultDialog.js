import React from 'react';

const ResultDialog = props => {
  const { onDialogClose } = props;

  return (
    <aside
      id="result-dialog"
      className={`mdc-dialog ${
        props.result !== null && props.result !== undefined
          ? 'mdc-dialog--open'
          : ''
      }`}>
      <div className="mdc-dialog__surface">
        <header className="mdc-dialog__header">
          <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
            Result
          </h2>
        </header>

        <section id="my-mdc-dialog-description" className="mdc-dialog__body">
          {props.result}
        </section>

        <footer className="mdc-dialog__footer">
          <button
            type="button"
            className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel"
            onClick={onDialogClose}>
            Close
          </button>
        </footer>
      </div>

      <div className="mdc-dialog__backdrop" />
    </aside>
  );
};

export default ResultDialog;
