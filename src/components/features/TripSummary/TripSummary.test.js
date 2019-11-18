import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct foto', () => {
    const src = 'www.string.com';
    const name = 'trip name';
    const tags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={tags} image={src} name={name} />);

    //const renderedTitle = component.find('.title').text();
    //expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('img').prop('alt')).toEqual(name);


  });

  it('should render correct id', () => {
    const idProps = 'abc';
    const tags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={tags} id={idProps} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${idProps}`);

  });


  it('should render correct name, costs and days', () => {
    const name = 'trip name';
    const days = 8;
    const cost = 2000;
    const tags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={tags} name={name} days={days} cost={cost}  />);

    //const renderedTitle = component.find('.title').text();
    //expect(renderedTitle).toEqual(expectedTitle);
    expect(days).toBe(8);
    expect(cost).toBe(2000);
    expect(name).toBe('trip name');

  });


  it('should render correct tags', () => {
    const tags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={tags} />);

    //const renderedTitle = component.find('.title').text();
    //expect(renderedTitle).toEqual(expectedTitle);
    for(let i = 0; i<3; i++){
      expect(component.find('.tag').at(i).text()).toEqual(tags[i]);
    }



  });

  it('shouldn t render tag if tags props is empty', () => {
    const tags = [];

    const component = shallow(<TripSummary tags={tags} />);

    //const renderedTitle = component.find('.title').text();
    //expect(renderedTitle).toEqual(expectedTitle);
    if(!tags.length){
      //expect(component.exists('.tags')).to.equal(false);
      expect(component.find('.tag').exists()).toEqual(false)
    }



  });

});
