import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Open the Snack bar
   * @param {string} message - The message of the snack bar.
   * @param {string} [snackTitleBtn=''] - The name on the button .
   * @param {number} [duration=5] - Duration to show message in milli seconds.
   * @memberof SnackBarService
   */
  openSnackBar(message: string, snackTitleBtn: string = 'Got It!', duration: number = 5000): void {
    const matSnackBarConfig: MatSnackBarConfig = {
      duration: duration
    }

    this.snackBar.open(message, snackTitleBtn, matSnackBarConfig)
  }
}
