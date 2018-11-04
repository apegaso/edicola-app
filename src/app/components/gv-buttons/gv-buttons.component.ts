import { Component, OnInit } from '@angular/core';
import {MatButton, MatCard, MatGridList, MatGridTile, MatList, MatListItem} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-gv-buttons',
  templateUrl: './gv-buttons.component.html',
  styleUrls: ['./gv-buttons.component.scss']
})
export class GvButtonsComponent implements OnInit {

  items: number[] ;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.items = [1, 2, 1, 3, 5, 10];
  }

  onClick(gvamount: number) {
    console.log('Click: ' + gvamount);
    this.openSnackBar('Aggiunto ' + gvamount + ' €', 'Chiudi');
  }

  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

}
