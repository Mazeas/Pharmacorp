import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DrugService {

  public drugs;
  public users;

  constructor(private http: HttpClient) { }

  getUsersUrl = 'http://163.172.122.64:8000/pharmacorp/user/listAll';
  getDrugsUrl = 'http://163.172.122.64:8000/pharmacorp/drugs/listAll';
  getCommandsUrl = 'http://163.172.122.64:8000/pharmacorp/orders/listAll';

  getUsers() {
    return this.http.get(this.getUsersUrl);
  }

  getDrugs() {
    return this.http.get(this.getDrugsUrl);
  }

  getCommands() {
    return this.http.get(this.getCommandsUrl);
  }

  addUser(user) {
    return this.http.post("http://163.172.122.64:8000/pharmacorp/user/signUp", user).subscribe(data => {

    });

  }

  addDrug(drug) {
    console.log(drug);
    return this.http.post("http://163.172.122.64:8000/pharmacorp/drugs/create", drug).subscribe(data => {

    });

  }
  addCommand(command) {
    return this.http.post("http://163.172.122.64:8000/pharmacorp/orders/create", command).subscribe(data => {

    });

  }
  connectUser(user) {
    return this.http.post("http://163.172.122.64:8000/pharmacorp/user/signIn", user);
  }
  getMeteo() {
    return this.http.get("http://api.weatherstack.com/current?access_key=18130bc6bc6dc8d69edf6ca6f72d7f85&query=Lyon");
  }
}