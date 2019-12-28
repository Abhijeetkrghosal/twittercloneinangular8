import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notes: any, filterresult: any[]): any {
if( filterresult === undefined) return notes;
return notes.filter( function(note) {
  return note.title.toLowerCase().includes(filterresult.toLocaleString());
})
  }

}
