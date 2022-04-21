import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-childComponent',
  templateUrl: './childComponent.component.html',
  styleUrls: [],
})
export class childComponent {
  search: string;
  @Input() module: any;
  @Output() close = new EventEmitter<any>();
  getData: any = {
    name: '',
    main: '',
    temp: '',
    mintemp: '',
    maxtemp: '',
    bgclass: '',
    div_name: '',
  };
  getgetData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.search +
        '&appid=d2462bc88bc5a2767311775ab0a30062'
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod != 200) {
          alert(data.message);
        }
        this.setgetData(data);
      });
  }

  setgetData(data) {
    this.getData.name = data.name;
    this.getData.main = data.weather[0].main;
    this.getData.temp = data.main.temp;
    this.getData.mintemp = data.main.temp_min;
    this.getData.maxtemp = data.main.temp_max;
    this.getData.bgclass = data.weather[0].main;
    this.getData.div_name = this.module;
    this.close.emit(this.getData);
  }
}
