import React from 'react';
import ContentHeader from '../content_header';

const StatisticView = () => (
  <div className="statistic-content">
    <ContentHeader
      name="Statistics"
      description="statistics"
      breadcrumb="Statistics"
      breadcrumbIcon="fa fa-dashboard"
    />
    <section className="content"><span>statistics</span></section>
  </div>
);

export default StatisticView;
