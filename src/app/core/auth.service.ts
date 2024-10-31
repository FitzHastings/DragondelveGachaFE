/* Copyright 2024 Prokhor Kalinin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { apiUrl } from './utils/api-url';
import { User } from './interfaces/user';

/**
 * AuthService is responsible for handling authentication-related operations,
 * including user login, token management, and checking authentication status.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly loginUrl = `${apiUrl}/auth/login`;
    private readonly verifyTokenUrl = `${apiUrl}/auth`;
    private readonly tokenKey = 'authToken';

    public constructor(private http: HttpClient) {
    }

    /**
     * Authenticates the user with the provided credentials.
     *
     * @param {string} username - The username of the user.
     * @param {string} password - The password of the user.
     * @return {Observable<{ access_token: string }>} An Observable that emits the authentication token upon successful login.
     */
    public login(username: string, password: string): Observable<{ access_token: string }> {
        return this.http.post<{ access_token: string }>(this.loginUrl, { username, password }).pipe(
            tap((response) => this.setToken(response.access_token))
        );
    }

    /**
     * Stores a given token in the browser's local storage.
     *
     * @param {string} token - The token to be stored.
     * @return {void}
     */
    public setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    /**
     * Retrieves a token from the local storage.
     *
     * @return {string | null} The token if it exists, otherwise null.
     */
    public getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    /**
     * Checks if the user is authenticated by validating the stored token.
     *
     * @return An Observable emitting the username if authenticated, otherwise an empty string.
     */
    public isAuthenticated(): Observable<User | null> {
        const token = this.getToken();
        if (!token)
            return of(null);


        return this.http.get<{ user: User }>(this.verifyTokenUrl, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).pipe(
            map((response) => response.user),
            catchError(() => of(null))
        );
    }

    /**
     * Logs the user out of the application by removing the authentication token from local storage.
     *
     * @return {void}
     */
    public logout(): void {
        localStorage.removeItem(this.tokenKey);
    }
}
