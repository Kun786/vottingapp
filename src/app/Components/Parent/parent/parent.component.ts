import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  _VotingCardObject:any;
  constructor() { }

  ngOnInit(): void {
  }

  AddCard(name:HTMLInputElement,image:HTMLInputElement,url:HTMLInputElement){

    let _Key = (Math.random()+1).toString(36).substring(7);
    this._VotingCardObject = {
      _Id:_Key,
      Title:name.value,
      ImageUrl:image.value,
      Link:url.value,
      _Points:0
    }

  }
}
