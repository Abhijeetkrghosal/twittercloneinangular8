import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  filterresult;

  notes: Notes[];
  noteTitle: '';
  notesid: number;
    constructor() {

     }

    ngOnInit() {
      this.notesid = 0;
      this.noteTitle = '';
      this.notes = [
        {
          'id': 1,
          'title':'abhijeet',
        },
        {
          'id': 2,
          'title': 'ghosal',
        },
        {
          'id': 3,
          'title': 'abhi',
        },
        {
          'id': 4,
          'title': 'amar',
        }
      ];
    }
    addnotes() {
      if (this.noteTitle.trim().length === 0) {
        return;
      }
      this.notes.unshift({
        id : this.notesid,
        title : this.noteTitle
      });
      this.noteTitle = '';
      this.notesid++;
    }
    deleteRowData(id: number){
      this.notes = this.notes.filter( note => note.id !== id);
    }
    // edittweet(id: number){


    // this.notes.map((note) => console.log(note.title));


    //   this.notes = this.notes.filter( note => note.title)
    // }


  }
interface Notes {
  id: number;
  title: string;
  }

