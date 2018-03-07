import {Http} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  countries;

  constructor(private http:HttpClient) { 

    this.getCountries();
  }

  ngOnInit() {
  }


  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      // the first argument is a function which runs on success
      data => { this.countries = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

}


 


 
    
 