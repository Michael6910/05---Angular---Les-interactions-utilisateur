import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from './../cat/cat';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {

  constructor(private catService: CatService,) { }
  
  public myChaton: Cat[] = this.catService.myChaton;

  ngOnInit() {
  }

}
