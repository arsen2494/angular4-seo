import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    titleService.setTitle('Home');
    metaService.addTags([
      {name: 'Home', content: 'Home'}
    ]);
   }

  ngOnInit() {
  }

}
