/* Copyright 2025 Prokhor Kalinin

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

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { apiUrl } from '../utils/api-url';
import { Character } from '../interfaces/character';

@Injectable({
    providedIn: 'root'
})
export class CollectionService {
    private collectionUrl = `${apiUrl}/character`;

    public constructor(private http: HttpClient) {
    }

    public fetchCollection(): Observable<Character[]> {
        return this.http.get<Character[]>(this.collectionUrl);
    }

    public fetchCharacter(id: number): Observable<Character> {
        return this.http.get<Character>(`${this.collectionUrl}/${id}`);
    }
}
