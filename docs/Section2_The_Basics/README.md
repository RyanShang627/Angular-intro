# Section 2: The Basics

## How an Angular App gets Loaded and Started

`main.ts` file inside the `/src` folder is the first file to be executed.

## Components are important

`<app-root></app-root>` is the root component.
 App component will bundle the whole application.

### Creating a new component

Now we want to create a component called server component.

To create a new component, a common way is to create a TypeScript file and a html file. As the example demonstrates in '\code\my-first-app\src\app\server', I created a .ts file with the following content:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}

```

Similarly, to have the template of the component, a html file is required like the 'server.component.html' shows:

```html
<p>The Server Component</p>
```

### Use the component

To use the component, we need to change the app module. Module is to bundle component into packages.

In the 'app.module.ts', We need to declare the component inside the declarations, and also import that module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the new component
import { ServerComponent } from './server/server.component';

@NgModule({
  // declare the new component
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

Now since the component is declared and imported, it is time to use that inside the 'app.component.html' file! Note that we know the app component is the root component of the app, so the new component should be added here.

```html
<h3>
  I'm in the AppComponent!
</h3>
<hr />
<app-server></app-server>
```

## Use Angular CLI to create a component

The Angular CLI provides convenient way to create component, and then we dont have to manually create a component:

```bash
ng generate component servers
```

Or a simpler expression: (g: generate; c: component)

```bash
ng g c servers
```

Now you will find that the component is automatically created (including .ts, .html, and .css files), and the app module is updated as well.

And we can use the new component in the 'app.component.html':

```html
<h3>
  I'm in the AppComponent!
</h3>
<hr />
<app-server></app-server>
<app-servers></app-servers>

```

## Develop the template inside the TypeScript file

It is possible to combine the html file and the TypeScript file in Angular. It looks very similar in Vue.js as the Vue provides a type of file called '.vue' which has template and script and style parts. All you need to do is to deal with the vue file.

Here it is similar, and you can write the html script inside the Typescript file. Take the servers component ('code/my-first-app/src/app/servers/servers.component.ts') as an example:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

In this example, the component uses an external html file as the template, in this case, it uses the 'templateUrl' to import that html file. Now we would like to make changes so that we can write template inside the TypeScript file:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // use 'template' instead of 'templateUrl'
  // and directly write html code inside
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

The principle is that if you have more than three lines of html code, it is better to write it inside an external html file; however, it is convenient to write the html code inside the typescript file if it is pretty lightweighted.

## Working with Component Styles

You can either do that inside the html file or using external css file. No matter which way you operate the style, you need to know that the `styles` or `styleUrls` are arrays, since there could be more than one style.

Note: when you would like to use the internal css style, you need to follow the rule like this:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<h4>This is a warning alert!</h4>',
  // use backtick inside the array
  styles: [
    `
      h4 {
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

```

## Selector

Component selector has to be unique. But there is a way to help you avoid that potential error: you can change the selector to the attribute. For example, in the 'servers.component.ts' file:

```typescript
@Component({
  // select by component itself
  selector: 'app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
```

Here the selector refers to the component itself, but we can also change it into an attribute by:

```typescript
@Component({
  // select by the attribute
  selector: '[app-servers]',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
```

And you need to change the way you use this component by referring to the attribute. In the 'app.component.html' file, it is changed to:

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3>
        I'm in the AppComponent!
      </h3>
      <hr />
      <!-- app-servers is now an attribute -->
      <div app-servers></div>
    </div>
  </div>
</div>

```

Plus, if you would like to select the component by class, you can also select the component by its name in the 'servers.component.ts':

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  // select by class
  selector: '.app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

```

And we need to change the html file ('app.component.html') accordingly:

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3>
        I'm in the AppComponent!
      </h3>
      <hr />
      <!-- select by class -->
      <div class="app-servers"></div>
    </div>
  </div>
</div>

```
