import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getData: any = {
    name: '',
    main: '',
    temp: '',
    mintemp: '',
    maxtemp: '',
    bgclass: '',
    div_name: '',
  };
  getData1: any = {
    name: '',
    main: '',
    temp: '',
    mintemp: '',
    maxtemp: '',
    bgclass: '',
    div_name: '',
  };
  getData2: any = {
    name: '',
    main: '',
    temp: '',
    mintemp: '',
    maxtemp: '',
    bgclass: '',
    div_name: '',
  };
  getData3: any = {
    name: '',
    main: '',
    temp: '',
    mintemp: '',
    maxtemp: '',
    bgclass: '',
    div_name: '',
  };
  popup: boolean = false;
  divname: string;
  constructor() {}

  ngOnInit() {}
  showTextBox: boolean = false;
  city1: string = '';
  bgclass: string;
  toggleTextBox(name: string) {
    this.divname = name;
    this.popup = true;
    this.showTextBox = true;
  }
  closePopup(getdata: any) {
    if (getdata.div_name == 'div2') {
      this.getData1 = getdata;
    } else if (getdata.div_name == 'div3') {
      this.getData2 = getdata;
    } else if (getdata.div_name == 'div4') {
      this.getData3 = getdata;
    } else {
      this.getData = getdata;
    }
    this.showTextBox = false;
    this.popup = false;
  }

  editcity() {
    //this.showTextBox = !this.showTextBox;
  }
}
