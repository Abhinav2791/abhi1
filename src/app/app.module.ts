import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { LovedComponent } from './welcome/loved/loved.component';
import { MobileSecurityComponent } from './welcome/mobile-security/mobile-security.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';
import { FindComponent } from './welcome/find/find.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { AboutComponent } from './welcome/about/about.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BannerComponent,
    LovedComponent,
    MobileSecurityComponent,
    LatestInsightsComponent,
    FindComponent,
    SpywareComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    PagenotfoundComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
