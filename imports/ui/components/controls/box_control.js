import React from 'react';

const BoxControl = () => (
  <div className="mailbox-controls">
    <div className="btn-group">
      <button type="button" className="btn btn-default btn-sm">
        <i className="fa fa-trash-o" />
      </button>
      <button type="button" className="btn btn-default btn-sm">
        <i className="fa fa-reply" />
      </button>
      <button type="button" className="btn btn-default btn-sm">
        <i className="fa fa-share" />
      </button>
    </div>

    <div className="box-tools pull-right">
      <div className="has-feedback">
        <input type="text" className="form-control input-sm" placeholder="Search User" />
        <span className="fa fa-search form-control-feedback" />
      </div>
    </div>
  </div>
);

export default BoxControl;
