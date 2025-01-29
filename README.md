# Quick Start with TypeScript

## What is TypeScript:

TypeScript (or TS) is a subset of JavaScript that provides static types to JS to help find type errors before runtime through the use
of the typescript compiler.

## How to use TypeScript

Here is a quick guide:

1. First make sure that you have node.js installed. If you do not it can be found here: https://nodejs.org/
2. After that is installed you will want to run `npm install -g typescript`. This will allow you to use the type script compiler for any project.
3. Make a file called tsconfig.json in the root of your project, and add the following content.

```jsonc
{
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig to read more about this file */

		"target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
		"module": "commonjs" /* Specify what module code is generated. */,
		"allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
		"checkJs": true /* Enable error reporting in type-checked JavaScript files. */,

		"outDir": "dist" /* Specify an output folder for all emitted files. */
	}
}
```

4. You can now start using TS by running the command `tsc -w`.

    - The `tsc` is the command used to run the type script compiler
    - The `-w` flag tells the compiler to watch for changes to the files. This means any files you save will be auto compiled.

5. The compiled JS will be in the dist directory at the root of your project and you can now use JS that has been made type safe 🥳

## How to use this project

This project is meant to be a nice reference for new users to see what power TS has to offer. Each file covers some topic about TS and they are in order of best to read first.

First compile the TS using: `tsc -b`

You can then run the files in this project by using the command:
`node dist/file_name.js`
Where file_name.js is the file that you want to run.

You can also open the index.html file in a browser once the code is compiled and view the console.

### syntax.ts

This file covers the basic syntax of TS and how you can add types to different parts of code.

### interfaces.ts

This file covers how to make interfaces and work with custom types.

### classes.ts

This file covers how to use classes in TS.
