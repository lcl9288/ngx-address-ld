import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NgxAddressLdModule} from '../../projects/ngx-address-ld/src/lib/ngx-address-ld.module';
import {AddressDataChinaService} from '../../projects/ngx-address-ld/src/lib/data/china';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAddressLdModule,
    FormsModule
  ],
  providers: [AddressDataChinaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
