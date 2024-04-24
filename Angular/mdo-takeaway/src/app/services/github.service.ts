import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<any>(url).pipe(
      catchError(error => {
        // Handle error here
        console.error('Error fetching user:', error);
        throw 'Error fetching user';
      })
    );
  }
}
