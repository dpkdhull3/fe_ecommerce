export interface IFileUploader {
  multiple?: boolean;
  formatsAllowed?: string;
  maxSize?: number;
  uploadAPI: IFileUploadServer;
  theme?: string;
  hideProgressBar?: boolean;
  hideResetBtn?: boolean;
  hideSelectBtn?: boolean;
  fileNameIndex?: boolean;
  autoUpload?: boolean;
  replaceTexts?: {
    selectFileBtn: string;
    resetBtn: string;
    uploadBtn: string;
    dragNDropBox: string;
    attachPinBtn: string;
    afterUploadMsg_success: string;
    afterUploadMsg_error: string;
    sizeLimit: string;
  };
}


export interface IFileUploadServer {
  url: string;
  method?: 'POST' | 'PUT';
  headers?: any;
  params?: any;
  responseType?: 'blob';
  withCredentials?: boolean;
}
