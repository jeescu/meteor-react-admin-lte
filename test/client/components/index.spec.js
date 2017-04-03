import React from 'react';
import { mount } from 'enzyme';
import Index from '../../../imports/ui/components/index';
import { chai } from 'meteor/practicalmeteor:chai';

const { expect }  = chai;

describe('App index', function () {
    it('shoud render app layout', function () {
        const wrapper = mount(<Index />);
        expect(wrapper.find('.app-layout').length).to.equal(1);
    });
});