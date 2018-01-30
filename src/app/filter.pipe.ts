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
    if(!value) return value;
    let eTime = new Date();
    let sTime = new Date(value);
    //day
    let nTime = (eTime.getTime() - sTime.getTime()) / (1000*3600*24);
    return nTime.toFixed(0);
  }
}
