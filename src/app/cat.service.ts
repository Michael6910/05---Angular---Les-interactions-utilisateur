import { Injectable } from '@angular/core';
import { Cat } from './cat/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  public chaton: Cat[] = [
    {name:'Cat1', race:'Maincoon', birthday:new Date(2019, 2, 1), picture:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F11.2F20.2Ff940f670-fc2e-497e-afce-919048436b67.2Ejpeg/748x372/quality/90/crop-from/center/focus-point/593%2C405/les-8-cles-d-un-chaton-en-pleine-sante.jpeg'},
    {name:'Cat2', race:'Bengal', birthday:new Date(2019, 2, 1), picture:'https://static.wamiz.fr/images/news/facebook/article/age-adulte-acc-fb-5915c5fca3f43.jpg'},
    {name:'Cat3', race:'Europeen', birthday:new Date(2019, 2, 1), picture:'https://jardinage.lemonde.fr/images/dossiers/2017-08/chaton-155455.jpg'}
];
 
public myChaton: Cat[] = [
  {name:'My Cat1', race:'Maincoon', birthday:new Date(2019, 2, 1), picture:'https://dbw4iivs1kce3.cloudfront.net/680x390/2014/04/Chaton-noir-et-roux-04-2016.jpg'},
];

  constructor() { }
}
