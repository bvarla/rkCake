import $ from 'jquery'

class MobileMenu{
 constructor(){
 this.menuIcon =  $(".site-header__menu-icon");
 this.menuContent = $(".site-header__menu-content")

 this.ourHome =  $("#our-home");
 this.ourAboutUs =  $("#our-aboutUs");
 this.ourGallery =  $("#our-gallery");
 this.ourTestimonials =  $("#our-testimonials");
 this.ourContactUs =  $("#our-contactUs");
 this.ourFlavours =  $("#our-flavours");

 this.ourHome.click(this.toggleTheMenu.bind(this));
 this.ourAboutUs.click(this.toggleTheMenu.bind(this));
 this.ourGallery.click(this.toggleTheMenu.bind(this));
 this.ourTestimonials.click(this.toggleTheMenu.bind(this));
 this.ourContactUs.click(this.toggleTheMenu.bind(this));
 this.ourFlavours.click(this.toggleTheMenu.bind(this));
 
 this.events();

}

  events(){
      this.menuIcon.click(this.toggleTheMenu.bind(this));
  }
  
  toggleTheMenu(){
     this.menuContent.toggleClass("site-header__menu-content--is-visible")
     this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }

}
export default MobileMenu;