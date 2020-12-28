export interface CommunicationMessage {
    recipient: "page" | "popup";
    operation: "getFormState" | "getEntityMetadata" | "getState" | "startRecording" | "stopRecording" | "formEvent";
    data?: any
}

export interface CommunicationRequest extends CommunicationMessage {
}

export interface CommunicationResponse extends CommunicationMessage {
    success: boolean;
}