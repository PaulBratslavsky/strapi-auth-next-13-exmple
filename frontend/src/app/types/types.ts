export interface FormAction {
  endpoint: string;
  method: string;
  formData: any;
}

export interface StrapiLogin {
  identifier: string;
  password: string;
}

export interface StrapiRegister {
  username: string;
  email: string;
  password: string;
}

export interface StrapiAuthResponse {
  jwt?: string;
  user?: User;
  error?: Error;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Error {
  status: number;
  name: string;
  message: string;
}



