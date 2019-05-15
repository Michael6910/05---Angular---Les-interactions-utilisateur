import { Component, OnInit } from '@angular/core';
import { Cat } from './../cat/cat';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CatService } from '../cat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {

  createKittenForm: FormGroup;

  private cat: Cat;



  constructor(private fb: FormBuilder, private catService: CatService, private router: Router, ) { }

  ngOnInit() {

    this.createKittenForm = new FormGroup({
      name: new FormControl('', Validators.required),
      race: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      picture: new FormControl(),

    })
  }


  public giveChaton() {
    if (this.createKittenForm.valid) {
      this.cat = this.createKittenForm.value;
      console.log(this.cat);
      /* Any API call logic via services goes here */
      const newchaton: Cat = this.cat;
      this.catService.chaton.push(newchaton);
      this.router.navigate(['/']);

    }
  }


}
