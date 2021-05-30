import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from '../drug.service';
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: any = {};
  ngForm: FormGroup;

  constructor(
    private router: Router,
    private drugService: DrugService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.ngForm = this.fb.group({  // Crée une instance de FormGroup
      mail: new FormControl(),
      password: new FormControl(),                 // Crée une instance de FormControl
    });
  }

  // login() {

  //   // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
  //   localStorage.setItem('user', JSON.stringify({ login: this.model.username }));
  //   this.router.navigate(['/users']);
  // }
  onFormSubmit(userForm: NgForm) {
    this.drugService.connectUser({
      "mail": this.ngForm.get('mail').value,
      "password": this.ngForm.get('password').value
    }).subscribe((response) => {
      console.log(response['user']);
      localStorage.setItem('user', JSON.stringify({ user: response['user'] }));
      this.router.navigate(['/users']);
    });
    this.router.navigate(['/signin']);

  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
