export interface ResponseDto {
  type: string;
  validation_status: string;
  failure_status: string;
  declined_reason: string;
  creation_date: Date;
  processing_start_date: Date;
  processing_finish_date: Date;
  details: Details;
  validation_inputs: ValidationInputs;
  user_response: UserResponse;
  validation_id: string;
  ip_address: string;
  account_id: string;
  threshold: number;
}

export interface Details {
  face_recognition_validations: FaceRecognitionValidations;
}

export interface FaceRecognitionValidations {
  similarity_status: string;
  confidence_score: number;
  passive_liveness_status: string;
  liveness_status: string;
  actions_status: ActionsStatus[];
}

export interface ActionsStatus {
  action: string;
  status: string;
}

export interface UserResponse {
  input_files: string[];
}

export interface ValidationInputs {
  liveness_actions: string[];
  validation_input_files: string[];
}
