import { Injectable, Inject } from '@angular/core';
import { FlexLunch, Option, Time } from '../interfaces/flexlunch';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  /** Name of the user */
  private userName = '';

  constructor(@Inject('mock-data') private flData: FlexLunch) {}

  /**
   * Returns all Options available
   * @returns all Option Objects
   */
  public getOptions(): Option[] {
    return this.flData.options;
  }

  /**
   * Returns an Option defined by its name
   * @param name The name property of the Option to find
   * @returns The Option if present in Data
   */
  public getOption(name): Option {
    const tempOption = this.flData.options.find(element => {
      return element.name === name;
    });
    return tempOption;
  }

  /**
   * Returns the specified Time Object Object of the specified Option
   * @param option The name of the Option to find the Time Object for
   * @param time The time property of the Time Option to find
   * @returns The Time Object, if present in Option
   */
  public getTimeOfOption(option: string, time: string): Time {
    const tempOption: Option = this.getOption(option);
    const tempTime = tempOption.times.find(element => {
      return element.time === time;
    });
    return tempTime;
  }

  private manageUserName(): void {}

  /**
   * Sets the userName
   * @param name The name to set as userName variable
   */
  private setUsername(name: string) {
    this.userName = name;
  }

  /**
   * Returns the userName variable
   * @returns The Nme of the user
   */
  private getUserName(): string {
    return this.userName;
  }
}
