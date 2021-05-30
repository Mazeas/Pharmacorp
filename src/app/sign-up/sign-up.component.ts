import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugService } from '../drug.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

  ngForm: FormGroup;
  @ViewChild('confirmPassword', { static: false }) confirmPassword: ElementRef;

  constructor(private drugService: DrugService, private router: Router, fb: FormBuilder) {
  }

  ngOnInit() {

  }

  onFormSubmit(userForm: NgForm) {
    this.drugService.addUser({
      "first_name": userForm.value.FirstName,
      "family_name": userForm.value.FamilyName,
      "society": userForm.value.Society,
      "mail": userForm.value.Mail,
      "password": userForm.value.Password
    });
    this.router.navigate(['/signin']);

  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();;
  }

  onSubmit = function (user) {
    console.log(user);

    //var body = "first_name=" + user.name + "&family_name=" + user.family_name + "&society=" + user.society + "&mail=" + user.mail + "&password=" + user.password;
    //this.http.post("http://163.172.122.64:8000/pharmacorp/user/signUp", body).subscribe((data) => {});

  }

}
