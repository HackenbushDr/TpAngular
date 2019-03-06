import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() post: any;



onAjoutLike(){
	this.post.loveIts ++;
	console.log(this.post.loveIts);
}

onAjoutDislike(){
	this.post.loveIts --;
	console.log(this.post.loveIts);
}

getColor(){
	if(this.post.loveIts > 0){
		return 'green';
	} else if (this.post.loveIts < 0){
		return 'red';
	}
}


  constructor() { }

  ngOnInit() {
  }

 
}
