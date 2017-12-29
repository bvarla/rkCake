class flavourSelection{

    constructor(){

        this.cakeFlavours = document.getElementById('CF');
        this.icingFlavours = document.getElementById('IF');
        this.fillingsFlavours = document.getElementById('FF');

        this.cakeFlavours.style.backgroundColor = "#36454f";
         this.cakeFlavours.style.color = "white"; 

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
        
        self.cakeFlavours = document.getElementById('CF');
        self.icingFlavours = document.getElementById('IF');
        self.fillingsFlavours = document.getElementById('FF');

        self.cakeFlavours.style.backgroundColor = "#36454f";

        if(clickedEle.srcElement.id == "CF"){
            self.cakeFlavorsDIV[0].style.display = "block";
            self.icingFlavoursDIV[0].style.display = "none";
            self.fillingsFlavoursDIV[0].style.display = "none";

            self.cakeFlavours.style.backgroundColor = "#36454f";
            self.cakeFlavours.style.color = "white"; 

            self.icingFlavours.style.backgroundColor = "whitesmoke";
            self.icingFlavours.style.color = "black"; 

            self.fillingsFlavours.style.backgroundColor = "whitesmoke";
            self.fillingsFlavours.style.color = "black"; 
            
        }else if(clickedEle.srcElement.id == "IF"){
            self.cakeFlavorsDIV[0].style.display = "none";
            self.icingFlavoursDIV[0].style.display = "block";
            self.fillingsFlavoursDIV[0].style.display = "none";

            self.icingFlavours.style.backgroundColor = "#36454f";
            self.icingFlavours.style.color = "white"; 

            self.cakeFlavours.style.backgroundColor = "whitesmoke";
            self.cakeFlavours.style.color = "black"; 

            self.fillingsFlavours.style.backgroundColor = "whitesmoke";
            self.fillingsFlavours.style.color = "black"; 

        }else if(clickedEle.srcElement.id == "FF"){
            self.cakeFlavorsDIV[0].style.display = "none";
            self.icingFlavoursDIV[0].style.display = "none";
            self.fillingsFlavoursDIV[0].style.display = "block";

            self.fillingsFlavours.style.backgroundColor = "#36454f";
            self.fillingsFlavours.style.color = "white"; 

            self.icingFlavours.style.backgroundColor = "whitesmoke";
            self.icingFlavours.style.color = "black"; 

            self.cakeFlavours.style.backgroundColor = "whitesmoke";
            self.cakeFlavours.style.color = "black"; 
        }
     
    }
}

export default flavourSelection;