export enum IRequestErrorType {
  InvalidRquest = "InvalidRquest",
  NoConnectivity = "NoInternetConnectivity",
  InvalidResponse = "InvalidResponse",
  RequestFailed = "RequestFailed",
}

export enum IRequestStatus {
  NONE,
  LOADING,
  SUCCESS,
  FAILED,
}
