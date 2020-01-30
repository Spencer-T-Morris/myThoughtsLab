import { Component, OnInit} from '@angular/core';

export interface post{
  title : string,
  thought : string,
}
@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent implements OnInit {
  thoughtsList: post[]= []
  submitted = false;
  show = false 
  addThought($event) {    
    this.thoughtsList = [...this.thoughtsList, $event]
    console.log(this.thoughtsList)
  }
  onSubmit() { this.submitted = true;
  }
  appear(){
    this.show=!this.show
  }
  
  constructor() { }
  
  ngOnInit() { }
}
