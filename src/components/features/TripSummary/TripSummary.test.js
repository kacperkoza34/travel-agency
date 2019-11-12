import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const idProps = 'abc';
    const src = 'www.string.com';
    const name = 'trip name';
    const days = 8;
    const cost = 2000;

    const component = shallow(<TripSummary id={idProps} image={src} name={name} days={days} cost={cost}  />);

    //const renderedTitle = component.find('.title').text();
    //expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${idProps}`);
    expect(component.find('img').prop('src')).toEqual(src);
    expect(component.find('img').prop('alt')).toEqual(name);
    expect(component.find('#cost').text('cost')).toEqual(cost);




    console.log(component.debug());

  });


});
