import { Component, OnInit } from '@angular/core';
import { SubreditService } from 'src/app/subredit/subredit.service';
import { SubreditModel } from 'src/app/subredit/subredit-response';

@Component({
  selector: 'app-subredit-side-bar',
  templateUrl: './subredit-side-bar.component.html',
  styleUrls: ['./subredit-side-bar.component.css']
})
export class SubreditSideBarComponent implements OnInit {
  subredits: Array<SubreditModel> = [];
  displayViewAll: boolean;

  constructor(private subreditService: SubreditService) {
    this.subreditService.getAllSubredits().subscribe(data => {
      if (data.length > 3) {
        this.subredits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subredits = data;
      }
    });
  }

  ngOnInit(): void { }

}
