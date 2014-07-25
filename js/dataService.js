/*dataService.js file*/

/*Amy Littlefield-Bousamra
Full Sail University
Instructor: Sean Bernath
Week2 Assignment Employee Directory*/

/*Note: my local storage does not work on my computer...but I think the code is correct? */

angular.module("MyApp").service("dataService", function(){

var recipeArray = [{
   shortname: 'burger',
   title: "World's Best Hamburger",
   ingredients: '2 Slices of rye bread,'+
    '1/3 cup water or red wine,'+
    '1 1/2 pounds ground beef,'+
    '1 tsp. pepper,' +
    '1 egg, beaten,'+
    '6 slices caraway cheese.'+
    'Sauce:'+
        '1/3 cup ketchup,'+
        '1 tsp soy sauce,'+
        '1 tsp lemon juice',
   directions: 'Break bread into water or wine. Mix beef, salt, pepper and egg. Mix well with bread;'+
       'make 12 thin patties. Top 6 patties with slice of cheese & place remaining 6 patties on top;' +
        'squeeze edges together to enclose the cheese. Grill about 4 minutes on each side, basting with sauce.',
    category: 'Lunch or Dinner Entree',
    notes: "Serves 4-6 people"
   },
    {
        shortname: 'germchoc',
        title: 'German Black Forest Cake',
        ingredients: "1 box dark chocolate or devil's food cake mix (your favorite brand)." +
        "1 teaspoon pure vanilla extract," +
        "3 cups heavy cream or whipping cream," +
        "1/3 cup powdered sugar,"+
        "1/4 cup Kirshwasser (Cherry Brandy), divided," +
        "1 container whipped icing (cream cheese or vanilla)," +
        "1 (21-ounce) can cherry pie filling, divided," +
        "Maraschino cherries (for garnish),"+
         "1 to 2 ounces shaved semisweet chocolate",
        directions: "Make chocolate cake according to package directions, adding 1 teaspoon vanilla extract." +
         "Bake cake, as directed, in two 9-inch layer cake pans. When done baking, remove from oven and cool." +
         "Place layers in the refrigerator for approximately 1  hour." +
         "brush each layer with 2 tablespoons cherry brandy." +
          "Then Frost the cake with whipped vanilla or cream cheese around the top edge of the first layer and place the cherry filling in the middle."+
            "Stack the 2nd layer on top and frost the rest of the cake." +
            "Finally add chocolate shavings to the top of the cake and a cherry on top!",
        category: 'Dessert or International',
        notes: 'Can add a third layer if desired and mix chocolate shavings in frosting'
    },

    {
        shortname: 'fatayers',
        title: 'Lebanese Fatayers',
        ingredients: 'For the Dough: 1 tablespoon active dry yeast, 1 teaspoon sugar, 1 1/4 cups warm water, 3 cups all-purpose flour, ' +
            '1 teaspoon salt, 3 tablespoons olive oil, to coat the fatayar. Quick-tip Use pre-made pastry dough. For the spinach filling: ' +
            '8 cups of fresh spinach, chopped or 2 lbs. frozen chopped spinach (thawed, drained, and squeezed dry) ' +
            '1 cup yellow onion, finely diced, 1 teaspoon salt, 1/4 teaspoon freshly ground black pepper, ' +
            '1/4 cup freshly squeezed lemon juice, 1/4 teaspoon allspice, 1/2 cup toasted pine nuts and 1 cup feta cheese.',
        directions: 'Make dough circles then roll the dough out into circles.' +
            'add a big spoon of spinach filling, pinch sides into triangles, grease pan and cook for 18 to 20 minutes until a light golden brown.',
        notes: 'Makes about 30 Fatayers',
        category: 'International'
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
