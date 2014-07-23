/*dataService.js file*/

/*Amy Littlefield-Bousamra
Full Sail University
Instructor: Sean Bernath
Week2 Assignment Employee Directory*/

/*Note: my local storage does not work on my computer...but I think the code is correct? */

angular.module("MyApp").service("dataService", function(){

var recipeArray = [{
   shortname: 'burger',
   title: 'Peanut Butter and Jelly Sandwich',
   ingredients: '2 Slices of Bread, Peanut Butter and choice of jelly or jam',
   directions: 'Spread peanut butter and jelly on slice of bread, place other piece of bread on-top and cut in half',
    category: 'Lunch Entree',
    notes: "Sadie's Favorite"
   },
    {
        shortname: 'germchoc',
        title: 'Kids Cheese Quesdilla',
        ingredients: + " " + 'Cheese of choice, flour tortilla optional:small pieces of ham',
        directions: 'Spread shredded cheese and/or tiny pieces of ham on flour tortilla. ' + " "+
            'Then microwave for 40 seconds, fold in half and cut into pieces as desired.',

        category: 'Alaska',
        notes: '99603'
    },
    {
        shortname: 'fatayers',
        title: 'Sneezy',
        ingredients: '415 Pollen Way',
        directions: 'Fox River',
        notes: '99603',
        category: 'Alaska'
    }];


    this.getRecipes = function(){
    // I thought this is the right code for storage but my items become hidden when I put it in...
    //var str = localStorage.getItem("RecipeLS");
    //recipeArray = JSON.parse(str) || recipeArray;
    return recipeArray;
}


   this.addRecipe = function(pRecipe){
    recipeArray.push(pRecipe);
    //var str = JSON.stringify(recipeArray);
   //localStorage.setItem("RecipeLS", str);

}

   this.removeRecipes = function(pRecipe){
   recipeArray.splice(recipeArray.indexOf(pRecipe),1);
   //var str = JSON.stringify(recipeArray); //my storage on my computer isn't working..??
   //localStorage.setItem("RecipeLS", str);

}


});
