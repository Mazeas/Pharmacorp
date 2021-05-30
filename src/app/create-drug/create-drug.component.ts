import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrugService } from '../drug.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-drug',
  templateUrl: './create-drug.component.html',
  styleUrls: ['./create-drug.component.css']
})
export class CreateDrugComponent implements OnInit {

  ngForm: FormGroup;

  constructor(private drugService: DrugService, private router: Router, fb: FormBuilder) { 
  }

  ngOnInit() {   
  }

  onFormSubmit= function(drugForm:NgForm){
    this.drugService.addDrug({
      "dosage": drugForm.value.dosage,
      "pathology": drugForm.value.pathology,
      "side_effects": drugForm.value.side_effects,
      "contraindication": drugForm.value.contraindication,
      "description	": drugForm.value.description,
      "libelle	": drugForm.value.libelle
    });
    this.router.navigate(['/drugs']);

  }

  resetDrugForm(drugForm:NgForm){
    drugForm.resetForm();;
  }

}
