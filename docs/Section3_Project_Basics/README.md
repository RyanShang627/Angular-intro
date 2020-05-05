# Course Project
## Planning the App
Feature:
1. Shopping List
2. Recipe Book

Component:
1. Root component
2. Header
3. Shopping List
4. Shopping List Edit
5. Recipe List
6. Recipe Item
7. Recipe Detail
8. RecipesComponent (holds Recipe List and Detail next to each other)

Model:
1. Ingredient
2. Recipe

## Setting up the Application
Reminder: 

Use `ng new PROJECT` to create a new project!

### Skip generating test files

At some points, it is not necessary to have the testing files, so when you use the Angular CLI to generate the component, you can select the option to skip the testing file:

```bash
ng g c recipes --skipTests true
```

### Generate a component with the path provided

In some cases, we don't want to generate the component right under the app folder. Therefore, we can provide the path of the component.

Example: Generate the recipe-list component under the recipes folder.

```bash
ng g c recipes/recipe-list --skipTests true
```

## Creating a Model

In the Angular, if you want to create a model, you'd better create a TypeScript file and define the class.

For example, you want to create a "Recipe" model, then:

You can create a ts file called "recipe.model.ts" with the following content:

```typescript
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
```