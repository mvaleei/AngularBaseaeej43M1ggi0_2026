

import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserService, User } from '../Services/user.service'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
    <ul *ngIf="users.length>0">
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
  `
})
export class Users implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = []
  loading = false
  error = ''



  ngOnInit(): void {
    this.loading = true
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users
        console.log(users.length)
        this.loading = false


      },
      error: (err) => {
        this.error = err.message
        this.loading = false
      }
    })
  }

}
