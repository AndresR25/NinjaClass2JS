function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.health = 100;
    this.name = name;


    this.sayName=function(){
        console.log("My name is " + this.name);
        
    }

    this.showStats=function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed : ${speed}, Strength : ${strength}`);
     
    }

    this.drinkSake=function(){
        this.health += 10;
    }
    this.kick = function(ninja) {
        if (ninja instanceof Ninja == true){
            const damage = strength * 5;
            ninja.health -= damage;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        }else{
            console.log("Your opponent isn't ninja");
        
    }
}

    this.punch=function(ninja){
        if ( ninja instanceof Ninja == true){
            ninja.health -= 5;
		    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        }else{
            console.log("Your opponent isn't ninja");
        }
        
			
    }

}



var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);

blueNinja.kick(redNinja);



