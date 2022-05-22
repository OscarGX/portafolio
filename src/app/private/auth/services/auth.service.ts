import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest, ILoginResponse, IRefreshTokenRequest, IRefreshTokenResponse } from '../interface';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public sessionObject!: ILoginResponse;
  public isLogged = false;

  constructor(private http: HttpClient, private router: Router) { }

  public login(body: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`/auth/login`, body)
      .pipe(tap(data => {
        this.saveSession(data);
        this.sessionObject = data;
      }));
  }

  private saveSession(sessioData: ILoginResponse): void {
    localStorage.setItem('user', JSON.stringify(sessioData));
    this.sessionObject = sessioData;
    this.isLogged = true;
  }

  public isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.isLogged = false;
    this.router.navigateByUrl('auth/login', { replaceUrl: true });
  }

  public userStatus(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.sessionObject = JSON.parse(user) as ILoginResponse;
      // this.store.dispatch(authActions.setUser({ usuario: this.sessionObject }));
    }
  }

  public getUserSession(): ILoginResponse {
    let payload!: ILoginResponse;
    const payloadJson = localStorage.getItem('user');
    if (this.isAuthenticated() && typeof payloadJson === 'string') {
      payload = JSON.parse(payloadJson) as ILoginResponse;
      return payload;
    }
    return payload;
  }

  public refreshToken(): Observable<IRefreshTokenResponse> {
    const userSession = this.getUserSession();
    const refreshObj: IRefreshTokenRequest = {
      username: userSession.username,
      refreshToken: userSession.refreshToken,
    };
    return this.http.post<IRefreshTokenResponse>('/auth/refresh', refreshObj)
      .pipe(
        tap((data) => this.saveOnRefreshToken(data))
      );
  }

  private async saveOnRefreshToken(refreshTokenResponse: IRefreshTokenResponse): Promise<void> {
    const userSession = this.getUserSession();
    userSession.accessToken = refreshTokenResponse.accessToken;
    userSession.refreshToken = refreshTokenResponse.refreshToken;
    this.saveSession(userSession);
  }
}
