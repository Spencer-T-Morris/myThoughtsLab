import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() title: string
  @Input() thought: string
  @Output() delete = new EventEmitter<boolean>();
  constructor() { }
  
  deleteThought(){
    this.delete.emit();
  }
  ngOnInit() {
    
  }
 
}
