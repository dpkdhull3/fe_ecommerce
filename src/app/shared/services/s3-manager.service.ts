import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable, of } from 'rxjs';
import { IS3FileConfig, IS3UploadResponse } from '../interfaces/s3-config.interface';


@Injectable({
  providedIn: 'root'
})
export class S3ManagerService {

  private BUCKET = "buckettestdpkdhull";

  constructor() { }

  private getS3Bucket():any {
    const bucket = new S3(
      {
        accessKeyId: 'AKIAQ45S57MVTNT7MT6V',
        secretAccessKey: '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',
        region: 'ap-south-1'
      }
    );
    return bucket;
  }

  public uploadFilesToBucket(fileBucketConfig:IS3FileConfig, uploadNotifier: Function): Observable<IS3UploadResponse | boolean> {
    const params = {
      Bucket: this.BUCKET ? this.BUCKET : fileBucketConfig.Bucket,
      Key: fileBucketConfig.Key,
      Body: fileBucketConfig.Body,
      ACL: fileBucketConfig.ACL
    };

    return this.getS3Bucket().upload(params, function (err, uploadResponse:IS3UploadResponse) {
      uploadNotifier(err,uploadResponse);
    });
  }
}
