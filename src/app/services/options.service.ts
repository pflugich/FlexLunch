import { Injectable, Inject } from '@angular/core';
import { FlexLunch, Option, Time } from '../interfaces/flexlunch';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsernameInputComponent } from '../components/username-input/username-input.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  /** Name of the user */
  public userName = '';

  public userName$: Subject<string> = new Subject();

  /** The Reference to the Dialog containing the UsernameInputComponent */
  private nameDialogRef: MatDialogRef<UsernameInputComponent>;

  constructor(@Inject('mock-data') private flData: FlexLunch, private dialog: MatDialog) {
    this.manageUserName();
  }

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

  /**
   * Function to manage the userName Variable. Will ask for user name if non is set.
   */
  private manageUserName(): void {
    if (this.userName.length === 0) {
      this.nameDialogRef = this.dialog.open(UsernameInputComponent);
      this.nameDialogRef.afterClosed().subscribe(result => {
        this.setUsername(result);
        this.userName$.next(result);
      });
    }
  }

  /**
   * Sets the userName
   * @param name The name to set as userName variable
   */
  private setUsername(name: string) {
    this.userName = name;
    console.log(`User name set to ${this.userName}`);
  }

  /**
   * Returns the userName variable
   * @returns The Nme of the user
   */
  private getUserName(): string {
    return this.userName;
  }
}
