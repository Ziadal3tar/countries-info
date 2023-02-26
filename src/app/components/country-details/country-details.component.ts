import { RequestsService } from 'src/app/services/requests.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})

export class CountryDetailsComponent {
  constructor(private req:RequestsService){}

  @Input() country:any
  @Input() dark:any


  borderCountry(event:any){
this.req.getCountryBycca3(event?.target.innerHTML).subscribe((data:any)=>{

this.country = data[0]
})
  }
}
