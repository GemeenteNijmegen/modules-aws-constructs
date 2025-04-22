export type CriticalityLevel = 'low' | 'medium' | 'high' | 'critical';

export class Criticality {

  static fromString(criticality: CriticalityLevel) {
    return new Criticality(criticality);
  }

  private lvl: CriticalityLevel;
  constructor(lvl: CriticalityLevel) {
    this.lvl = lvl;
  }

  /**
   * Creates the appropriate suffix for alarms to be picked up
   * by the landingzone monitoring.
   * @returns - Alarm suffix (e.g. -low-lvl or -critical-lvl).
   */
  alarmSuffix() {
    return `-${this.lvl}-lvl`;
  }

  /**
   * Convert the level to a string.
   * @returns - E.g. 'high' or 'medium'
   */
  toString() {
    return this.lvl;
  }

  /**
   * Increases the criticality by one.
   * Can be used as: `criticality.increase().alarmSuffix()`
   * @returns - this object
   */
  increase() {
    if (this.lvl == 'low') {
      return new Criticality('medium');
    }
    if (this.lvl == 'medium') {
      return new Criticality('high');
    }
    if (this.lvl == 'high') {
      return new Criticality('critical');
    }
    return this;
  }

  /**
   * Decreases the criticality by one.
   * Can be used as: `criticality.decrease().alarmSuffix()`
   * @returns - a new criticality object
   */
  decrease() {
    if (this.lvl == 'critical') {
      return new Criticality('high');
    }
    if (this.lvl == 'high') {
      return new Criticality('medium');
    }
    if (this.lvl == 'medium') {
      return new Criticality('low');
    }
    return this;
  }
}