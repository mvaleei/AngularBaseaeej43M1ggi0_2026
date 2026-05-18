// user.service.ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface User {
    id: number
    name: string
    email: string
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com'

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/users`)
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/users/${id}`)
    }

    createUser(user: Omit<User, 'id'>): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/users`, user)
    }

    updateUser(id: number, user: Partial<User>): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/users/${id}`, user)
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
    }
}