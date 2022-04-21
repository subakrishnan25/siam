import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getData: any={name:''};
  constructor() {}

  ngOnInit() {}
  showTextBox: boolean = false;
  city1: string = '';

  toggleTextBox(var_: number) {
    this.showTextBox = !this.showTextBox;
  }

  getgetData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.city1 +
        '&appid=d2462bc88bc5a2767311775ab0a30062'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setgetData(data);
      });
  }

  setgetData(data) {
    this.getData = data;
    console.log(this.getData.name);
  }
}
