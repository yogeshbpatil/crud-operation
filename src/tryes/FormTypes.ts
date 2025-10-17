// src/types/FormTypes.ts
export interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  dateOfBirth: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pinCode: string;
}

export interface FormErrors {
  name?: string;
  mobileNumber?: string;
  email?: string;
  dateOfBirth?: string;
  addressLine1?: string;
  city?: string;
  pinCode?: string;
}