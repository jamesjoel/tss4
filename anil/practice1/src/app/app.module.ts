import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { GetDataService } from './services/get-data.service'

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
