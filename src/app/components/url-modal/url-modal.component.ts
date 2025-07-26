import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

export interface UrlModalData {
  apiUrl: string;
}

@Component({
  selector: 'app-url-modal',
  templateUrl: './url-modal.component.html',
  styleUrls: ['./url-modal.component.css']
})
export class UrlModalComponent {
  apiUrl: string;

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: UrlModalData
  ) {
    this.apiUrl = data.apiUrl;
  }

  copyUrl(): void {
    navigator.clipboard.writeText(this.apiUrl);
  }

  close(): void {
    this.dialogRef.close();
  }
}