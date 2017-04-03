/* eslint-disable import/no-unresolved */
import React from 'react';
import { mount } from 'enzyme';
import Index from '../../../imports/ui/components/index';
import { expect } from 'chai';

describe('App index', () => {
  it('shoud render app layout', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find('.app-layout').length).to.equal(1);
  });
});
