import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  @Input() widget: any
  constructor() { }

  ngOnInit() {
    console.log(this.widget);
  }

}
