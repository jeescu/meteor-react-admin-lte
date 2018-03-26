import React from 'react';
import PropTypes from 'prop-types';

const ContentHeader = ({
  name,
  description,
  breadcrumbIcon,
  breadcrumb,
}) => (
  <section className="content-header">
    <h1>
      {name}
      <small>{description}</small>
    </h1>

    <ol className="breadcrumb">
      <li className="active">
        <i className={breadcrumbIcon} /> {breadcrumb}
      </li>
    </ol>
  </section>
);

ContentHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  breadcrumbIcon: PropTypes.string,
  breadcrumb: PropTypes.string,
};

export default ContentHeader;
