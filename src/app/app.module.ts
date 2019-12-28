import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {Routes, RouterModule } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { SixthpageComponent } from './sixthpage/sixthpage.component';
import { FilterPipe } from './filter.pipe';
import { TrendsComponent } from './trends/trends.component';
const appRoutes: Routes = [
  { path: 'first-page', component: FirstpageComponent},
  { path: 'second-page', component: SecondpageComponent},
  { path: 'third-page', component: ThirdpageComponent},
  { path: 'fourth-page', component: FourthpageComponent},
  { path: 'fifth-page', component: FifthpageComponent},
  { path: 'sixth-page', component: SixthpageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FourthpageComponent,
    FifthpageComponent,
    SixthpageComponent,
    FilterPipe,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
