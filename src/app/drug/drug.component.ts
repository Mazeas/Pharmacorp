import { Component, OnInit, Injectable } from '@angular/core';
import { DrugService } from '../drug.service';


@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})

@Injectable()
export class DrugComponent implements OnInit {

  public drugs;
 // public meteo;
  constructor(private drugService: DrugService) { }

  getUser() {
    this.drugService.getDrugs().subscribe((response) => {
      this.drugs = response;
    });
  }

 /* getMeteo(){
    this.drugService.getMeteo().subscribe((response) =>{
      console.log(response);
      this.meteo = response;
    })
  }*/

  ngOnInit() {  
    this.getUser();
   // this.getMeteo();
  }

}
