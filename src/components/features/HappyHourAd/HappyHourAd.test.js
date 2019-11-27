import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd.js';
import { mount } from 'enzyme';

const mockProps = {
  title: 'Happy Hour',
  promoDescription: 'The best time to choose trip',
};


const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists()).toBeTruthy();
    }
  );

// nowy test:

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    const title = component.find(select.title);
    const description = component.find(select.promoDescription);
    expect(title.toBeTruthy);
    expect(description.toBeTruthy);
  });

  it('should render corect title and description', () => {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const title = component.find(select.title);

    expect(title.text()).toEqual(mockProps.title);
    //const description = component.find(select.promoDescription);
    //expect(title.toBeTruthy);
    //expect(description.toBeTruthy);
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    jest.useRealTimers();
    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd display promoDesrciption between 12:00 and 13:00', () => {
  checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
  checkDescriptionAtTime('12:59:59', mockProps.promoDescription);
});

describe('Component HappyHourAd is timer change to promoDescription', () => {
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('12:00:00', 1, mockProps.promoDescription );
});
