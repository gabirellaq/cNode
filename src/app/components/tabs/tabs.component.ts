import { Component, OnInit } from '@angular/core';

const TOPICSTAB = [
  {
    label:'all',
    name:'全部'
  },{
    label:'good',
    name:'精华'
  },{
    label:'share',
    name:'分享'
  },{
    label:'ask',
    name:'问答'
  },{
    label:'job',
    name:'招聘'
  }
]

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  topicsTab = TOPICSTAB;
  constructor() { }

  ngOnInit() {
  }

}
