import { Component, OnInit } from '@angular/core';
import { SubreditModel } from '../subredit-response';
import { SubreditService } from '../subredit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subredits',
  templateUrl: './list-subredits.component.html',
  styleUrls: ['./list-subredits.component.css']
})
export class ListSubreditsComponent implements OnInit {

  subredits: Array<SubreditModel>;
  constructor(private subreditService: SubreditService) { }

  ngOnInit() {
    this.subreditService.getAllSubredits().subscribe(data => {
      this.subredits = data;
    }, error => {
      throwError(error);
    })
  }
}