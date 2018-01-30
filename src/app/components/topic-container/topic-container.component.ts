import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.scss'],
  providers:[HttpService]
})
export class TopicContainerComponent implements OnInit {
  id:string; //详情对应的id,从路由中获取
  topicDetail=[]; //详情内容
  constructor(
    private route: ActivatedRoute,
    private http:HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.getTopicDetail(this.id)
      .then(res=>{
        this.topicDetail = res.data;
      }).catch(err=>{
        console.log("get topic detail err:", err);
      })
  }

}
