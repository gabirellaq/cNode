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
    if (!value) return ''
    var date = new Date(value)
    var time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
      return ''
    } else if ((time / 1000 < 30)) {
      return '刚刚'
    } else if (time / 1000 < 60) {
      return (time / 1000).toFixed(0) + '秒前'
    } else if ((time / 60000) < 60) {
      return (time / 60000).toFixed(0) + '分钟前'
    } else if ((time / 3600000) < 24) {
      return (time / 3600000).toFixed(0) + '小时前'
    } else if ((time / 86400000) < 31) {
      return (time / 86400000).toFixed(0) + '天前'
    } else if ((time / 2592000000) < 12) {
      return (time / 2592000000).toFixed(0) + '月前'
    } else {
      return (time / 31536000000).toFixed(0) + '年前'
    }
  }
}
