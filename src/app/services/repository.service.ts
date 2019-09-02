import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Repos } from '../models/repos.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private resource = `${environment.apiHost}`;

  constructor(
    private http: HttpClient
  ) { }

  public list(): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.resource}/orgs/${environment.ownerRepos}/repos`);
  }

  public details(name: string): Observable<Repos> {
    return this.http.get<Repos>(`${this.resource}/repos/${environment.ownerRepos}/${name}`);
  }
}
