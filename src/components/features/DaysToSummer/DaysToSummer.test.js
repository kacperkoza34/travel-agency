import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer.js';
import { mount } from 'enzyme';

const mockProps = {
  title: 'Days to summer!',
}

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists()).toBeTruthy();
    }
  );
});
