import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent implements OnInit {

  // @Input('blogInput') blog:Blog | undefined

  // //This allows the child to reply to parent
  // @Output() actionEmitter = new EventEmitter<Blog>()
  //this.actionEmitter.emit(this.blog)
  @Output() actionEmitter = new EventEmitter<any>()
  public data:any;
  public setData(value:any):void{
    
  }
  constructor(){}
  ngOnInit(): void {
  }
  //These buttons should have an emitter to pass the action type
  deleteAllOnClick = () => {
    this.actionEmitter.emit("DELETE ALL")
  }

  addOnClick = () => {
    this.actionEmitter.emit("ADD")
  }

}
