import {Component} from '@angular/core';
import {AddressDataChinaService} from '../../projects/ngx-address-ld/src/lib/data/china';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-address-lcl';

  public id: any;
  public opt: any;

  constructor(private china: AddressDataChinaService) {
    this.opt = {
      jumps: this.china.getJumps(),
      data: this.china.getData.bind(this.china)
    };
  }
}
