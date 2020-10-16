import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

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
    //return collection;
    // return collection.filter( coll => {
    //   return coll.includes(criteria);
    // });

    return collection.filter(coll => coll[field]==criteria);
   }
}
  
  
  