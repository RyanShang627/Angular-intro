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
