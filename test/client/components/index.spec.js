/* eslint-disable import/no-unresolved */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Index from '../../../imports/ui/components/index';

describe('App index', () => {
  it('should render app layout', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find('.app-layout').length).to.equal(1);
  });
});
