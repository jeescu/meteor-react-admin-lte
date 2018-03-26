import React from 'react';
import PropTypes from 'prop-types';

const CallOutMessage = ({ title, description }) => (
  <div className="callout callout-danger">
    {title && <h4>{title}</h4>}
    <p>{description}</p>
  </div>
);

CallOutMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CallOutMessage;
