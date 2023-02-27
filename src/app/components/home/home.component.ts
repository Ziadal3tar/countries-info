import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('mood') mood: any;
  theMood = 'Dark Mood';
  dark = false;
  countries: any[] = [];
  nameCountry: any;
  region: any;
  countryDetails: any;
  openCountryDetails = false;
  constructor(private elementRef: ElementRef, private req: RequestsService) {
    this.elementRef.nativeElement.style.setProperty('--text-color', 'black');
    this.elementRef.nativeElement.style.setProperty(
      '--nav-bgColor',
      'hsl(0, 0%, 100%)'
    );
    this.elementRef.nativeElement.style.setProperty(
      '--input-bgColor',
      'hsl(0, 0%, 100%);'
    );
    this.elementRef.nativeElement.style.setProperty(
      '--filter-bgColor',
      'hsl(0, 0%, 100%);'
    );
    this.elementRef.nativeElement.style.setProperty(
      '--CD-bgColor',
      'hsl(0, 0%, 100%);'
    );
    this.elementRef.nativeElement.style.setProperty(
      '--countryDetailsDiv-bgColor',
      'hsl(0, 0%, 90%)'
    );
  }
  ngOnInit(): void {
    this.getAllCountry();
  }
  changeMood() {
    if (this.dark) {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        ' hsl(0, 0%, 98%)';
      this.elementRef.nativeElement.style.setProperty('--text-color', 'dark');
      this.theMood = 'Dark Mood';

      this.elementRef.nativeElement.style.setProperty(
        '--nav-bgColor',
        'hsl(0, 0%, 100%)'
      );

      this.elementRef.nativeElement.style.setProperty(
        '--input-bgColor',
        '(0, 0%, 100%)'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--filter-bgColor',
        'hsl(0, 0%, 100%)'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--CD-bgColor',
        '(0, 0%, 100%)'
      );

      this.elementRef.nativeElement.style.setProperty(
        '--countryDetailsDiv-bgColor',
        'white'
      );
      this.dark = false;
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        'hsl(207, 26%, 17%)';
      this.elementRef.nativeElement.style.setProperty('--text-color', 'white');
      this.theMood = 'night Mood';

      this.elementRef.nativeElement.style.setProperty(
        '--nav-bgColor',
        'hsl(209, 23%, 22%)'
      );

      this.elementRef.nativeElement.style.setProperty(
        '--input-bgColor',
        'hsl(209, 23%, 22%)'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--filter-bgColor',
        'hsl(209, 23%, 22%)'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--CD-bgColor',
        'hsl(209, 23%, 22%)'
      );
      this.elementRef.nativeElement.style.setProperty(
        '--countryDetailsDiv-bgColor',
        'hsl(209, 23%, 22%)'
      );
      this.dark = true;
    }
  }
  getAllCountry() {
    this.req.getAllCountry().subscribe((data: any) => {
      this.countries = data;
    });
  }
  searchByName() {
    if (this.nameCountry == '') {
      this.getAllCountry();
    } else {
      this.req.getCountryByName(this.nameCountry).subscribe((data: any) => {
        this.countries = data;
      });
    }
  }
  filterByRegion(event: any) {
    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.querySelectorAll('.activeRegion');
    if (elements.length != 0) {
      elements[0].classList.remove('activeRegion');
    }
    this.region = event.target.innerHTML;
    event.target.classList.add('activeRegion');

    if (event.target.innerHTML == 'All') {
      this.getAllCountry();
    } else {
      this.req.getCountryByRegion(this.region).subscribe((data: any) => {
        this.countries = data;
      });
    }
  }

 
}
