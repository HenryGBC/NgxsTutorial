import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from '../core/services/store/auth/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLogged$: Observable<boolean>;
  constructor(private store: Store) {
    this.isLogged$ = this.store.select((state) => state.auth.isLogged);
    console.log(this.isLogged$);
  }

  ngOnInit(): void {
    this.isLogged$.subscribe((res) => {
      console.log(res);
    });
  }
}
