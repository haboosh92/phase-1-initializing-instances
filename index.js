// Write your code here
class Breakfast{
    constructor(food, drink){
        this.food = "eggs";
        this.drink = "juice";

    }
}

 class Lunch{
    constructor(salad, soup, drink){
        this.salad = "side salad";
        this.soup = "broccoli cheddar soup";
        this.drink = "iced tea";

    }
 }

 class Dinner{
    #dessert        //private (nitialize dessert as a private property by prefixing its name with the hash symbol (#).)
    constructor(salad, soup, entree, dessert){
         this.salad = "balsamic salad";
         this.soup = "consomme";
         this.entree = "filet mignon"
        // this.dessert = "consomme";
    }
 }

const firstMeal = new Breakfast ;
const secondMeal = new Lunch ; 
const thirdMeal = new Dinner ;