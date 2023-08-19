# Test PrdInfo

If you want to test typescript code, this starter kit might help you.

## Requirements

## Usage

`git clone ...`
`cd ...
npm install `

## Build, Compile, Test

### Compile ts to js

`npm run build`
It runs
`npx tsc`
The compiled files will be created in the dist/

### Run compiled js file

`npm run start 
npm start
`
It runs
`node dist/index.js`

### Unify compilation and execution

`npm run dev`
It runs
`ts-node src/index.ts`

### Automated compilation and execution

`npm run dev:watch`
It runs
`npx ts-node-dev --respawn src/index.ts`
You no longer have to type every time you modify your code.
Whenever you modify your code and save it, it will automatically compile to reflect your modifications.

You can stop it by
`^c`

### Clean compiled js files

`npm run clean`
It runs
`rimraf dist/*`

## Packages
