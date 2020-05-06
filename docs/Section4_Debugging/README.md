# Debugging

## Understanding Angular Error Messages
We can use the Console in the developer tool of Google Chrome.

Not panic, read the exact error messages.
## Debugging Code in the Browser Using Sourcemaps
In addition to the Console tool, we can also use the "Sources" tool to debug inside the code. A common case is to first go to the `main.js` file, and dive deep into the location where could be the error place.

After you click on the row number, it will jump into the specific file (original file) instead of the bundled file. Then you can now debug and see the values of variables in every step.

But a better way is to directly locate to the original file. You can open the `webpack://` folder and go to `.` folder. Then you will find the `src` folder. It is easier to find the file.

## Using Angury to Dive into Angular Apps

Angury is a Google extension of Angular framework.