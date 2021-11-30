export interface IS3FileConfig {
  Bucket?: string;
  Key: string;
  Body: any;
  ACL?: string;
}

export interface IS3UploadResponse {
  Bucket: string;
  Key: string;
  Location: string;
  key: string;
}
