import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupCreatePostComponent } from '../popup-create-post/popup-create-post.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',

})
export class CreatePostComponent {
  description:String="test";
  titre:String = "About";

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
    this.dialogRef.open(PopupCreatePostComponent,dialogConfig)
  }



}
