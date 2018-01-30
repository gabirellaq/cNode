import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

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
  }
]

@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.scss'],
  providers:[HttpService]
})
export class TopicContentComponent implements OnInit {
  topicsTab = TOPICSTAB; //tab的值
  topics={
    'all':[],
    'good':[],
    'share':[],
    'job':[],
    'ask':[]
  }; //获取的topics的值
  tab = 'all'; //默认是all,从地址栏中获取的tab
  topicslist = []; //切换tab保存的值
  constructor(
    private http:HttpService
  ) { }

  ngOnInit() {
    console.log(this.tab);
    //all
    this.http.getTopic('topics')
      .then(res=>{
        //分类
        res.data.forEach(item=>{
          this.topics[item.tab].push(item);
          if(item.good === true){
            this.topics.good.push(item);
          }
        })
        this.topics.all = res.data;
        this.topicslist = res.data; //默认显示全部
      }).catch(err=>{
        console.log(err);
      })
  }

  changeTab(e){
    this.tab = e;
    this.topicslist = this.topics[e];
  }

}
