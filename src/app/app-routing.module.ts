import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'about-us',component:AboutUsComponent,
  children: [
    {
      path:'gallery',component:GalleryComponent,
  }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
