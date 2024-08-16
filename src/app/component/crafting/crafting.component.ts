import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipes } from '../../models/recipe.model';

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.css'
})
export class CraftingComponent {
  constructor(private service: RecipeService) { }

  recipes: Recipes[] = []

  
  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.service.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      console.log(data);
    });
  }

  // SELECT ACTICE RECIPE
  selectedRecipe?: Recipes


  setSelectedRecipe(recipe: Recipes) {
    this.selectedRecipe = recipe
    this.checkCraftability()
  }

  checkCraftability() {
    //by default, we asume all we have enough ingredient
    this.selectedRecipe!.isCraftable = true

    //loop through our ingredients to check if we have enough 
    this.selectedRecipe!.ingredients?.forEach((ingredient) => {

      //if any of the ingredients is not enough, set craftable to fales
      if (ingredient.amountNeeded > ingredient.inventory.amount) {
        this.selectedRecipe!.isCraftable = false
        console.log("not craftable" + ingredient.inventory.name)
        return; // stop whenever any of this ingredients are not enough
      }
    })
  }

  //calls when clicking on craft
  craftNewRecipe(recipe: Recipes) {
    if (this.selectedRecipe!.id === recipe.id) { // Making sure the right recipe has been selected
      // Call our service function
      this.service.craftRecipe(recipe).subscribe((data) => {
        this.selectedRecipe!.amountCrafted++;
        console.log(data);
  
        // Check if ingredients are defined before looping through them
        if (recipe.ingredients) {
          // Update the inventory for ingredients after crafting
          recipe.ingredients.forEach(ingredient => {
            // Assuming your service returns updated inventory information
            ingredient.inventory.amount -= ingredient.amountNeeded;
          });
        }
  
        // Recheck craftability after crafting
        this.checkCraftability();
      });
    }
  }


}
