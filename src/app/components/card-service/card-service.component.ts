import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupServiceComponent } from '../popup-service/popup-service.component';
@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent {
  constructor(private dialogRef : MatDialog){}
  openDialog(){
    const dialogConfig = new MatDialogConfig();


        dialogConfig.width="40%"
        dialogConfig.position = {
          top: '-60%',
          left: '30%'
      };
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
    this.dialogRef.open(PopupServiceComponent,dialogConfig)
  }
}
