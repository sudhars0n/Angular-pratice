import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { EmpService } from './emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component: EventListComponent
      },
      {
        path:'body',
        component:BodyComponent
      },
      {
        path:'footer',
        component:FooterComponent
      }
    ]),

  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
