import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'driverfilter'
})
export class DriverfilterPipe implements PipeTransform {

  transform(collection: any[], field: any, criteria: any): any {
    
    if(!collection)
    {
      return [];
    }
    if(!criteria)
    {
      return collection;
    }

    console.log(collection);

    return collection.filter(coll => coll[field]==criteria);
   }

}
