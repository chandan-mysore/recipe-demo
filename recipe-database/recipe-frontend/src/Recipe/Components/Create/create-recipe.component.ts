import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
  
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RecipeService } from '../../Service/recipe-backend.service';
import { MessageModule } from 'primeng/message';

  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ButtonModule,MessageModule],
  templateUrl: './create-recipe.component.html'
})
export class CreateRecipeComponent {
  isMessageVisible = false;
  DetailForm!: FormGroup;
  successMessage:string ='Recipe Added Successfully';
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public recipeService: RecipeService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.DetailForm = new FormGroup({
      Name: new FormControl<string>('',[Validators.required]),
      Description: new FormControl<string>('',[Validators.required]),
      Cooking_Time: new FormControl<number>(0,[Validators.required]),
      Preparation_Time: new FormControl<number>(0,[Validators.required])
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.DetailForm.controls;
  }
      
 
  submit(){
    console.log(this.DetailForm.value);
    this.recipeService.createRecipe(this.DetailForm.value).subscribe((response: any)=>{
    
      this.isMessageVisible = true;
        console.log(response);
        });
  }
  
}