import { formatTime } from './formatTime';
import { daysToSummer } from './daysToSummer';

daysToSummer
describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });

  });

  describe('daysToSummer', () => {

    it('should return false if is summer', () => {
      expect(daysToSummer(new Date(2019,6,22))).toBe(false); //<----  07.22.2019
      expect(daysToSummer(new Date(2019,5,21))).toBe(false); //<----  06.21.2019
      expect(daysToSummer(new Date(2019,8,23))).toBe(false); //<----  08.23.2019
    });

    it('should return correct number if is not summer', () => {
      expect(daysToSummer(new Date(2019,5,20))).toBe(1); //<----  06.20.2019
      expect(daysToSummer(new Date(2019,9,15))).toBe(250); //<----  10.15.2019
      expect(daysToSummer(new Date(2019,8,24))).toBe(271); //<----  09.24.2019

    });

  });


});
