import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
  
})

export class PostFormComponent implements OnInit {
  @Input() title: string
  @Input() thought: string 
  @Output() newThought= new EventEmitter<post>()
  newTitle: string
  idea: string
  addThought(){
    this.newThought.emit({title: this.newTitle, thought: this.idea})
  }
  constructor() { }

  ngOnInit() {
  }

}
