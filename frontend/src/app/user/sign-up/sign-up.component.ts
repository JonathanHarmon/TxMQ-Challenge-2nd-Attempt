import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  constructor( public userService: UserService ) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    return this.userService.postUser(form.value)
  }

}
