import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    titleService.setTitle('About');
    metaService.addTags([
      { name: 'About', content: 'About' }
    ]);
  }

  ngOnInit() {
  }

}
