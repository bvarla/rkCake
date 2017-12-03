class Testimonials{

    constructor(){
        
        this.slideIndex = 1;
        this.showDivs( this.slideIndex);

        function plusDivs(n) {
        this.showDivs( this.slideIndex += n);
        }
        
    }

     showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides-Testi");
        if (n > x.length) {this.slideIndex = 1}    
        if (n < 1) {this.slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[this.slideIndex-1].style.display = "flex";  
        }
}

export default Testimonials;