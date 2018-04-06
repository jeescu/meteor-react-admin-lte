/* eslint-disable import/no-unresolved */
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../../imports/ui/components/home';

// TODO: centralized this config
configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should render home layout', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.lockscreen-wrapper').length).to.equal(1);
  });
});
