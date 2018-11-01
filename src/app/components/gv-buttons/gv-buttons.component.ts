import { Component, OnInit } from '@angular/core';
import {MatButton, MatCard, MatGridList, MatGridTile, MatList, MatListItem} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-gv-buttons',
  templateUrl: './gv-buttons.component.html',
  styleUrls: ['./gv-buttons.component.scss']
})
export class GvButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(gvamount: number) {
    console.log('Click: ' + gvamount);
  }
}
