import { Criticality } from '../src/Criticality/Criticality';

describe('Criticality', () => {
  test('increase', () => {
    const a = new Criticality('high').increase();
    expect(a.toString()).toBe('critical');
    expect(a.alarmSuffix()).toBe('-critical-lvl');
  });

  test('increase cap', () => {
    const a = new Criticality('high').increase().increase().increase();
    expect(a.toString()).toBe('critical');
    expect(a.alarmSuffix()).toBe('-critical-lvl');
  });

  test('decrease', () => {
    const a = new Criticality('high').decrease();
    expect(a.toString()).toBe('medium');
    expect(a.alarmSuffix()).toBe('-medium-lvl');
  });

  test('decrease cap', () => {
    const a = new Criticality('high').decrease().decrease().decrease().decrease();
    expect(a.toString()).toBe('low');
    expect(a.alarmSuffix()).toBe('-low-lvl');
  });
});

