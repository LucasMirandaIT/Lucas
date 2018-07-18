import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dds-card-rotate-modal',
  templateUrl: './dds-card-rotate-modal.component.html',
  styleUrls: ['./dds-card-rotate-modal.component.scss']
})
export class DdsCardRotateModalComponent {

  @ViewChild('formRelease') formRelease: NgForm;
  @ViewChild('dataForm') dataForm: NgForm;

  numeroPeticao = null;
  version = [{release: null, similarName: null}];

  constructor(public dialogRef: MatDialogRef<DdsCardRotateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  changeRelease(release) {
    if (!release) {
      return 'releaseInvalid';
    }
    return this.version;
  }

}
