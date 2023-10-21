export interface FormAction {
  endpoint: string;
  method: string;
  formData: any;
  setLoading: (loa: boolean) => void;
  setMessage: (message: string) => void;
}

export interface StrapiLogin {
  identifier: string;
  password: string;
}

export interface StrapLoginResponse {

}

export interface StrapiRegister {
  username: string;
  email: string;
  password: string;
}

export interface StrapRegisterResponse {

}

