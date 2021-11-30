import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { S3UploaderModule } from 'ngx-s3-uploader';

@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    AngularFileUploaderModule
  ],
  exports: [FileUploaderComponent]
})
export class SharedModule { }
