import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { Recipe } from '../../Service/dto/recipe';
import { RecipeService } from '../../Service/recipe-backend.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    MessageModule,
  ],
  providers: [MessageService],
  templateUrl: './edit-recipe.component.html'
})
export class EditRecipeComponent {
  isMessageVisible = false;
  id!: number;
  recipe!: Recipe;
  form!: FormGroup;
  msgs1!: Message[];

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.msgs1 = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Recipe updated successfully!',
      },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
    ];

    this.recipeService.findRecipe(this.id).subscribe((data: Recipe) => {
      this.recipe = data;
    });

    this.form = new FormGroup({
      recipe_name: new FormControl<string>('', [Validators.required]),
      recipe_description: new FormControl<string>('', Validators.required),
      pre_time: new FormControl<number>(0, [Validators.required]),
      cook_time: new FormControl<number>(0, Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.recipeService
      .updateRecipe(this.id, this.form.value)
      .subscribe((response: any) => {
        console.log(response);
        console.log('Recipe updated successfully!');
        this.isMessageVisible = true;
      });
  }
}
