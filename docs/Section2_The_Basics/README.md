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

## Data Binding

Databinding = Communication

TypeScript Code (Business Logic) and Template (HTML). The only things the user sees is the template. Output Data from '.ts' to '.html'.

There are two ways to bind the data from TypeScript Code to Template:

1. String Interpolation ( `{{data}}` )
2. Property Binding ( `[property]="data"` )

And if you want to react to (User) Events, you should use Event Binding ( `(event)="expression"` )

If you want to combine both, you can use the combination of both: Two-Way-Binding ( `[(ngModel)]="data"` ).

### String Interpolation

`{{ }}` is the expression of string interpolation. It is used in the case when the template intends to display the data in the model layer.

An interesting is that the method can be called in the string interpolation as well inside the template.

Component html file:

```html
<p>{{ "server" }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

Component ts file:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  // define the method
  getServerStatus() {
    return this.serverStatus;
  }
}

```

### Property Binding

Property binding is another way of binding data dynamically. Below is the property binding comparison between `Vue.js` and `Angular`:

`Vue.js`:
Vue uses `:` to indicate the property binding.

```html
<button class="btn btn-primary" :disabled="!allowNewServer">Add Server</button>
```

`Angular`:
Angular uses `[]` to indicate the property binding.

```html
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
```

### Property Binding vs String Interpolation

They can be replaced in some cases:

```html
<!-- string interpolation -->
<p>{{ allowNewServer }}</p>

<!-- property binding -->
<h4 [innerText]="allowNewServer"></h4>
```

Note: String interpolation only works in normal template.

### Event Binding

Event binding is very common behavior, especially when you want to do something when you click a button. Note: 'click/hover/keydown/etc.' are all events.

In Vue.js, we use `@click="onSubmit()"` to bind the `onSubmit` method to the button, and this method or event will be triggered whent the button is clicked.

In Angular, we use `(click)` to bind the event to the button, as the following example indicates:

```html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()"
>
  Add Server$$
</button>
```

### Passing and Using Data with Event Binding

Important: FormsModule is Required for Two-Way-Binding!

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the `ngModel` directive. This is done by adding the `FormsModule` to the `imports[]` array in the AppModule.

You then also need to add the import from `@angular/forms` in the app.module.ts file:

```typescript
import { FormsModule } from '@angular/forms';
```

### Two-way Data Binding

To bind the template and data model in two ways, you need to use the `[(ngModel)]="xxx"` syntax. The `xxx` is the data.

Note: To make sure no bug, the FormsModule must be imported in the app module.

html:

```html
<!-- Two way binding -->
<input type="text" class="form-control" [(ngModel)]="serverName" />
```

## Directives

Directives are Instructions in the DOM!

Example:

template:

```html
<p appTurnGreen>Receives a green background!</p>
```

data model:

```typescript
@Directive({
  selector: '[appTurnGreen]'
})

export class TurnGreenDirective {
  ...
}
```

### Using ngIf to Output Data Conditionally

Syntax:

```html
<p *ngIf="serverCreated">Server was created, server name is {{ serverName }}</p>
```

### Enhancing nglf with an Else Condition

This is a bit more complicated than the same one in Vue.js since it has no `else` directive.

The basic idea is to have another `<ng-template></ng-template>` with the name.

```html
<!-- declare the else case name in if condition -->
<p *ngIf="serverCreated; else noServer">
  Server was created, server name is {{ serverName }}
</p>
<!-- the else condition -->
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```

### Styling Elements Dynamically with ngStyle

The syntax should be `[ngStyle]="{'xx': 'xx'}"`

Example:

template:

```html
<p [ngStyle]="{ backgroundColor: getColor() }">
  {{ "server" }} with ID {{ serverId }} is {{ getServerStatus() }}
</p>
```

data model:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

```

### Applying CSS Classes Dynamically with ngClass

This can help bind the class based on the condition.

Example:

html code:
```html
<p
  [ngStyle]="{ backgroundColor: getColor() }"
  [ngClass]="{ online: serverStatus === 'online' }"
>
  {{ "server" }} with ID {{ serverId }} is {{ getServerStatus() }}
</p>

```
ts code:
```typescript
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
```

### Outputting Lists with ngFor
`ngFor` is a commonly-used directive, especially for iterating a list.

html code:
```html
<app-server *ngFor="let server of servers"></app-server>
```

ts code:
```typescript
import { Component } from '@angular/core';

@Component({
  // select by class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {

  servers = ['TestServer', 'TestServer2'];

  onCreateServer() {
    this.servers.push(this.serverName);
  }
}

```