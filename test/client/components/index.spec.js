/* eslint-disable import/no-unresolved */
import React from 'react';
import { mount, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Index from '../../../imports/ui/components/index';

// TODO: centralized this config
configure({ adapter: new Adapter() });

describe('App index', () => {
  it('should render app layout', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find('.app-layout').length).to.equal(1);
  });
});
