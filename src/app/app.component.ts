import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from '../app/drug.service';



@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'PharmaCorp';
  public meteo;
  now: any;
  user: any;
  constructor(private router: Router, private drugService: DrugService) {
    setInterval(() => {
      this.now = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    }, 1);

  }


  btnMedicament() {
    this.router.navigate(['/drugs']);
  }

  btnUser() {
    this.router.navigate(['users']);
  }

  btnCommand() {
    this.router.navigate(['/commands']);
  }

  btnConnect() {
    this.router.navigate(['/signin']);
  }

  btnCreateMedicament() {
    this.router.navigate(['/create_drug']);
  }

  getMeteo() {
    this.drugService.getMeteo().subscribe((response) => {
      this.meteo = response;
    })
  }

  ngOnInit() {
    this.getMeteo();
    this.user = localStorage.getItem('user');
    console.log(this.user);

  }

}
