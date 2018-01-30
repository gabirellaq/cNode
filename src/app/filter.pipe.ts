import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

@Pipe({
  name:'time'
})
export class TimePipe implements PipeTransform {
  transform(value){
    //if(!value) return value;
    let eTime = new Date();
    let sTime = new Date(value);
    //day
    let nTime = (eTime.getTime() - sTime.getTime()) / (1000*3600*24);
    let nnTime;
    if(nTime > 0 && nTime < 30){
      nnTime = nTime.toFixed(0) + "天前";
      if(nTime.toFixed(0) === "0"){
        nnTime = "今天";
      }
    }
    else if( nTime >= 30 && nTime < 365) {
      nnTime = (nTime / 30).toFixed(0) + "月前";
    }
    else if(nTime >= 365){
      nnTime = (nTime / 365).toFixed(0) + "年前";
    }
    return nnTime;
  }
}
