import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubreditModel } from '../subredit-response';
import { Router } from '@angular/router';
import { SubreditService } from '../subredit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-subredit',
  templateUrl: './create-subredit.component.html',
  styleUrls: ['./create-subredit.component.css']
})
export class CreateSubreditComponent implements OnInit {
  createsubreditForm: FormGroup=new FormGroup({});
  subreditModel: SubreditModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subreditService: SubreditService) {
      this.createsubreditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description:new FormControl('', Validators.required)
    });
    this.subreditModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
   
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubredit() {
    this.subreditModel.name = this.createsubreditForm.get('title')
    .value;
    this.subreditModel.description = this.createsubreditForm.get('description')
    .value;
    this.subreditService.createSubredit(this.subreditModel).subscribe(data => {
      this.router.navigateByUrl('/list-subredits');
    }, error => {
      console.log('Error occurred');
    })
  }
}