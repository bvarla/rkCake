class flavourSelection{

    constructor(){

        this.cakeFlavours = document.getElementById('CF');
        this.icingFlavours = document.getElementById('IF');
        this.fillingsFlavours = document.getElementById('FF');

        this.events();

        // element.onclick = function(event) {
        // var x = document.getElementsByClassName("cakeFlavors");
        
        // x[0].style.display = "none";
        // console.log(event);
        // 
    }

    events(){
        var self = this;
        this.cakeFlavours.onclick = this.toggleTheFlavourMenu.bind(this.id);
        this.icingFlavours.onclick = this.toggleTheFlavourMenu.bind(this.id);
        this.fillingsFlavours.onclick = this.toggleTheFlavourMenu.bind(this.id);
    }
    
    toggleTheFlavourMenu(clickedEle){

        self.cakeFlavorsDIV = document.getElementsByClassName("cakeFlavors");
        self.icingFlavoursDIV = document.getElementsByClassName("icingFlavors");
        self.fillingsFlavoursDIV = document.getElementsByClassName("fillings");


        if(clickedEle.srcElement.id == "CF"){
            self.cakeFlavorsDIV[0].style.display = "block";
            self.icingFlavoursDIV[0].style.display = "none";
            self.fillingsFlavoursDIV[0].style.display = "none";
            
        }else if(clickedEle.srcElement.id == "IF"){
            self.cakeFlavorsDIV[0].style.display = "none";
            self.icingFlavoursDIV[0].style.display = "block";
            self.fillingsFlavoursDIV[0].style.display = "none";

        }else if(clickedEle.srcElement.id == "FF"){
            self.cakeFlavorsDIV[0].style.display = "none";
            self.icingFlavoursDIV[0].style.display = "none";
            self.fillingsFlavoursDIV[0].style.display = "block";
        }
     
    }
}

export default flavourSelection;