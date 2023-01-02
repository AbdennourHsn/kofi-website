import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/profile/about-page/about-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/profile/posts/posts.component';
import { ServicesComponent } from './pages/profile/services/services.component';
import { ShopComponent } from './pages/profile/shop/shop.component';
import { ProfileDefaultComponent } from './pages/profile/profile-default/profile-default.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SettingformComponent } from './components/settingform/settingform.component';

const routes: Routes = [
  
  {
    path:"profile",component:ProfileDefaultComponent,
    children: [
      {path:"shop",component:ShopComponent},
      {path:"about",component:AboutPageComponent},
      {path:"posts",component:PostsComponent},
      {path:"services",component:ServicesComponent},
    ]
  },
  

  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"sidebar",component:SideBarComponent},
  {path:"settings",component:SettingformComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
