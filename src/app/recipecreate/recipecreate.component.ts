import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-recipecreate',
  templateUrl: './recipecreate.component.html',
  styleUrls: ['./recipecreate.component.scss'],
})
export class RecipecreateComponent implements OnInit {
  indredientArray: FormArray | any;

  constructor(private fb: FormBuilder) {}
  recipeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    ingredient: new FormArray([this.ingredientObj()]),
  });

  ingredientObj() {
    return this.fb.group({
      name: '',
      amount: '',
    });
  }

  addIngredient() {
    let recipeArray = this.recipeForm.value.ingredient;
    recipeArray.push({
      name: '',
      amount: '',
    });
    this.recipeForm.value.ingredient = recipeArray;
  }

  removeIngredient(index: any) {
    let recipeArray = this.recipeForm.value.ingredient;
    recipeArray.splice(index, 1);
    this.recipeForm.value.ingredient = recipeArray;
  }

  setIngredientValues(inputname: any, event: any, index: any) {
    let recipeArray = this.recipeForm.value.ingredient;
    recipeArray[index][inputname] = event.target.value;
  }

  ngOnInit(): void {}

  submitForm() {
    console.log(this.recipeForm.value);
  }
}
