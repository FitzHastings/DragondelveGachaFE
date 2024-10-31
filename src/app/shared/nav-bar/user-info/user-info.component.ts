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

import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/interfaces/user';

@Component({
    selector: 'app-user-info',
    standalone: true,
    imports: [],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
    public user: WritableSignal<User | null> = signal<User | null>(null);

    public constructor(private readonly router: Router, private readonly authService: AuthService) {
    }

    public ngOnInit(): void {
        this.authService.isAuthenticated().subscribe((user) => {
            if (!user)
                this.router.navigate(['/login']);
            this.user.set(user);
        });
    }

    protected onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
