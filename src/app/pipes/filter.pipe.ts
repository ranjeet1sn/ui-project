import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (!args) return value;
    if (
      value.some(
        (item: any) =>
          item.status.toLowerCase().indexOf(args.toLowerCase()) > -1
      )
    ) {
      return value.filter(
        (item: any) =>
          item.status.toLowerCase().indexOf(args.toLowerCase()) > -1
      );
    } else if (
      value.some(
        (item: any) => item.from.toLowerCase().indexOf(args.toLowerCase()) > -1
      )
    ) {
      return value.filter(
        (item: any) => item.from.toLowerCase().indexOf(args.toLowerCase()) > -1
      );
    } else if (
      value.some(
        (item: any) =>
          item.address.toLowerCase().indexOf(args.toLowerCase()) > -1
      )
    ) {
      return value.filter(
        (item: any) =>
          item.address.toLowerCase().indexOf(args.toLowerCase()) > -1
      );
    }
  }
}
