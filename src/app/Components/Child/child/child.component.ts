import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() OutGoingDataToChild:any;

  data:any=[];
  constructor() { }

  ngOnInit(): void {
    this.ProcessCards(this.OutGoingDataToChild);
  }

  ngOnChanges(): void{
    this.ProcessCards(this.OutGoingDataToChild);
  }

  ProcessCards(data:any){
    if (data!=null){
      this.data.push(data)
    }
  }

  Add(id:any){
    let _GetArray = this.data;
    let _SortedArray = _GetArray.map((_KeyPair : any)=>{
      if(_KeyPair._Id === id){ _KeyPair._Points++;}
      return _KeyPair;
    })
    .sort((a: any, b: any) => b._Points - a._Points);
    this.data = _SortedArray;
  }

  Down(id:any){
    let _GetArray = this.data;
    let _SortedArray = _GetArray.map((_KeyPair:any)=>{
      if(_KeyPair._Id === id){
        if(_KeyPair._Points !== 0){
          _KeyPair._Points--;
        }
      }
      return _KeyPair;
    })
    .sort((a: any, b: any) => b._Points - a._Points);
    this.data = _SortedArray;
  }

}
