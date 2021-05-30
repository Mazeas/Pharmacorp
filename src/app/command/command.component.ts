import { Component, OnInit } from '@angular/core';
import { DrugService } from '../drug.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  public commands;
  constructor(private drugService: DrugService) { }

  getCommands() {
    this.drugService.getCommands().subscribe((response) => {
      this.commands = response;
    });
  }

  ngOnInit() {  
    this.getCommands();
  }

}
