import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username= ""; //从url栏中获取的
  userMsg={}; //用户的信息
  userCollect=[]; //用户收藏的主题

  constructor(
    private route: ActivatedRoute,
    private http:HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    //用户信息
    this.http.getUser(this.username)
      .then(res=>{
        this.userMsg = res.data;
      }).catch(err=>{
        console.log("get user err:", err);
      });

    //用户收藏的主题
    this.http.getTopicCollect(this.username)
      .then(res=>{
        this.userCollect = res.data;
      }).catch(err=>{
        console.log("get user err:", err);
      });
  }

}
