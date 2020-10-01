import { SnackBarService } from './../snack-bar.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor(private snackBarService: SnackBarService) { }

   /**
   * Open the dialog SnackBar with the message 
   * @param {{ [key: string]: string }} data
   * @memberof ErrorService
   */
  public openDialog(data: { [key: string]: string }): void {
    const errorMessage = `${data.reason ? data.reason + 'with' : ''} Error Status: ${data.status ? data.status : ''}`;

    this.snackBarService.openSnackBar(errorMessage);
  }
}
