import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HeaderComponent } from './shared/header/header.component';
import { EmphasisComponent } from './shared/layout/emphasis/emphasis.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LayoutModule } from './shared/layout/layout.module';
import { SliderComponent } from './shared/layout/slider/slider.component';
import { VideoComponent } from './shared/layout/video/video.component';
import { SearchComponent } from './shared/header/search/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SliderComponent,
    VideoComponent,
    EmphasisComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    MatIconModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
