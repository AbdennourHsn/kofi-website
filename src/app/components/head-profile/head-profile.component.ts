import { Component } from '@angular/core';

@Component({
  selector: 'app-head-profile',
  templateUrl: './head-profile.component.html',
  styleUrls:['./head-profile.component.css']
  
})
export class HeadProfileComponent {
  ngOnInit(){
    this.setActiveItem(window.location.pathname)
      
  }

  setActiveItem(path:String){
    if(document.getElementsByClassName("item-active")[0])
      document.getElementsByClassName("item-active")[0].classList.remove("item-active")
    if(path=="/profile/about")
      document.getElementById("about")?.classList.add("item-active")
    else if(path=="/profile/posts")
      document.getElementById("posts")?.classList.add("item-active")
    else if(path=="/profile/shop")
      document.getElementById("shop")?.classList.add("item-active")
    else if(path=="/profile/services")
      document.getElementById("services")?.classList.add("item-active")
  }
}
