import { Component, OnInit, Injectable } from '@angular/core';
import { DrugService } from '../drug.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
@Injectable()
export class IndexComponent implements OnInit {

  public users;
  constructor(private drugService: DrugService) { }

  getUser() {
    this.drugService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}