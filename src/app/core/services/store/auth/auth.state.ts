import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthService } from '../../auth/auth.service';
import { Login, LoginComplete } from './auth.actions';
import { AuthModel } from './auth.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@State<AuthModel>({
  name: 'auth',
  defaults: {
    isLogged: false,
    token: '',
  },
})
@Injectable()
export class AuthState {
  constructor(private _authService: AuthService, private _router: Router) {}

  @Action(Login)
  login({ getState, setState }: StateContext<AuthModel>, { payload }: Login) {
    return this._authService.login(payload).pipe(
      tap((response) => {
        const state = getState();
        setState({
          ...state,
          isLogged: true,
          token: response.token,
        });
        this._router.navigateByUrl('/');
      })
    );
  }

  @Action(LoginComplete)
  loginComplete({ getState, setState }: StateContext<AuthModel>) {
    const token = this._authService.getToken();
    const state = getState();
    setState({
      ...state,
      isLogged: true,
      token: token,
    });
  }
}
