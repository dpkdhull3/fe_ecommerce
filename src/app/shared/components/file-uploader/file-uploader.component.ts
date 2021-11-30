import { Component, OnInit } from '@angular/core';
import { IFileUploader } from '../interfaces/file-uploader-config.interface';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  public uploaderConfig: IFileUploader;
  public configReady = false;

  constructor() {}

  ngOnInit(): void {
    this.prepareConfig();
  }

  private prepareConfig(): void {
    this.uploaderConfig = {
      uploadAPI: {
        url: 'https://buckettestdpkdhull.s3.ap-south-1.amazonaws.com/test'+new Date().toDateString(),
        method: 'PUT',
        responseType: 'blob',
        withCredentials: false,
      },

      fileNameIndex: false,
      autoUpload: true,
    };
    this.configReady = true;
  }
  // https://productimagesdeepaktest.s3.ap-south-1.amazonaws.com/
  // https://s3.amazonaws.com/bucket/productimagesdeepaktest
  // https://s3.ap-south-1.amazonaws.com/productimagesdeepaktest

  public docUploaded(evt: any) {
    console.log('event', event);
  }
}
