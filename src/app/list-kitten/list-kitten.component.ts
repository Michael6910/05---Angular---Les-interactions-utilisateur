import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat/cat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  public chaton: Cat[] = this.catService.chaton;

  constructor(private catService: CatService, ) { }

  ngOnInit() {
  }


  public AdoptChaton(chaton:Cat) {
    const target = this.chaton.indexOf(chaton);
    this.chaton.splice(target, 1);
    this.catService.myChaton.push(chaton)
    
  }

}



