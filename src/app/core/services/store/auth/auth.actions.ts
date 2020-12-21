import { AuthModel, AuthPayload } from './auth.model';
export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: AuthPayload) {}
}
export class LoginComplete {
  static readonly type = '[Auth] Login Complete';
}
