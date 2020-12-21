export interface AuthModel {
  isLogged: boolean;
  token: string;
}

export interface AuthPayload {
  email: string;
  password: string;
}
