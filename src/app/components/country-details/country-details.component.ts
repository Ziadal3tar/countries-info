import { RequestsService } from 'src/app/services/requests.service';
import { Component, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  constructor(private req: RequestsService,@Inject(DOCUMENT) private document: any) {}
  flag=''
  @Input() country: any;
  @Input() dark: any;
  elem: any;
ngOnInit(): void {
  this.elem = document.documentElement;

}

  borderCountry(event: any) {
    this.req
      .getCountryBycca3(event?.target.innerHTML)
      .subscribe((data: any) => {
        this.country = data[0];
      });
  }


  @HostListener('document:keyup', ['$event'])
  cc(event:any){
    console.log(event);


  }
  openFullscreen() {

    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }

  }
  closeFullscreen() {
    this.flag = ''
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
