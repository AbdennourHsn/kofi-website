import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import {PostComponent} from './components/post/post.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupCreatePostComponent } from './components/popup-create-post/popup-create-post.component';
import { HeadProfileComponent } from './components/head-profile/head-profile.component';
import { BuyACoffeComponent } from './components/buy-a-coffe/buy-a-coffe.component';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import { PostsComponent } from './pages/profile/posts/posts.component';
import { ShopComponent } from './pages/profile/shop/shop.component';
import { ServicesComponent } from './pages/profile/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/profile/about-page/about-page.component';
import { ProfileDefaultComponent } from './pages/profile/profile-default/profile-default.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SettingformComponent } from './components/settingform/settingform.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { PopupServiceComponent } from './components/popup-service/popup-service.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    CreatePostComponent,
    PopupCreatePostComponent,
    HeadProfileComponent,
    BuyACoffeComponent,
    CardShopComponent,
    PostsComponent,
    ShopComponent,
    ServicesComponent,
    HomeComponent,
    AboutPageComponent,
    ProfileDefaultComponent,
    SideBarComponent,
    SettingformComponent,
    PostComponent,
    CardServiceComponent,
    PopupServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
