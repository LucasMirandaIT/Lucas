import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dds-modal',
  templateUrl: '/dds-modal.component.html',
  styleUrls: ['./dds-modal.component.scss'],
})
export class DdsModalComponent {
  htmlContent: SafeHtml;
  numeroPeticao: any;
  @ViewChild('dataForm') dataForm: NgForm;

  constructor( public dialogRef: MatDialogRef<DdsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  confirm(valid) {
    if (!this.data.InputPeticao) {
      return true;
    }
    if (!valid) {
      return 'invalid';
    }
    return this.numeroPeticao;
  }
}
