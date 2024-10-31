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

import { Component, Input, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-button',
    standalone: true,
    imports: [],
    templateUrl: './nav-button.component.html',
    styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {
    private _title = signal<string>('');
    private _link = signal<string>('');

    public constructor(private router: Router) {
    }

    @Input({ required: true })
    public set title(value: string) {
        this._title.set(value);
    }

    public get title(): string {
        return this._title();
    }

    @Input({ required: true })
    public set link(value: string) {
        this._link.set(value);
    }

    public get link(): string {
        return this._link();
    }

    public onClick(): void {
        this.router.navigate([this.link]);
    }
}
