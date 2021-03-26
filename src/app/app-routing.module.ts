import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { VideoComponent } from './shared/layout/video/video.component';


const routes: Routes = [
  {  path: "",  component: LayoutComponent},
  {  path: "video/:id",  component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
