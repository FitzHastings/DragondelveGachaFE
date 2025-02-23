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

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { apiUrl } from '../utils/api-url';
import { PagedEntities } from '../interfaces/paged-entities';
import { Rarity } from '../interfaces/rarity';

@Injectable({
    providedIn: 'root'
})
export class RarityService {
    private fetchRarityUrl = `${apiUrl}/rarity`;

    public constructor(private http: HttpClient) {
    }

    /**
     * Fetches a paginated list of Rarity entities.
     *
     * @param {number} [page] - Optional page number for pagination.
     * @param {number} [limit] - Optional limit on the number of items per page.
     * @return {Observable<PagedEntities<Rarity>>} An observable containing the paginated list of Rarity entities.
     */
    public fetchRarities(page?: number, limit?: number): Observable<PagedEntities<Rarity>> {
        const params = new HttpParams();

        if (page) params.set('page', page);
        if (limit) params.set('limit', limit);

        return this.http.get<PagedEntities<Rarity>>(this.fetchRarityUrl, { params });
    }
}
