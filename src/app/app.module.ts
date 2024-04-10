import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModule } from './shared/materialmodule/mat.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './service/service.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MenuItemComponent } from './shared/menu-item/menu-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomHttpLoader } from './core/factories/CustomHttpLoader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel'; 
import { ImageModule } from 'primeng/image'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent} from './pages/gallery/gallery.component';
import { GalleriaModule } from 'primeng/galleria';
import { FilterimagesPipe } from './pages/filterimages-pipe.pipe';
import { PhotoService } from './pages/photoservice.service';
import { GalleryComponent as GalleryComponentBuiltIn } from '@daelmaak/ngx-gallery';
import { HammerModule } from '@angular/platform-browser'
import { Angular2ImageGalleryModule } from 'angular2-image-gallery'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    NavigationComponent,
    MenuItemComponent,
    AboutUsComponent,
    GalleryComponent,
    FilterimagesPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatModule,
    MatExpansionModule,
    HttpClientModule,
    CarouselModule,
    ImageModule,
    FontAwesomeModule,
    FontAwesomeModule,
    GalleriaModule,
    GalleryComponentBuiltIn,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CustomHttpLoader,
        deps: [HttpClient],
      }
    })  ],
    
    providers: [PhotoService, FilterimagesPipe],    
  bootstrap: [AppComponent]
})
export class AppModule { }
