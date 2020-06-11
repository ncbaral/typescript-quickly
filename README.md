# typescript-quickly
exercise from typescript quickly book


### Installation steps

```shell
npm init
npm install --save-dev typescript
tsc --init
```
### Basic tsconfig

```javascript
{
    "compilerOptions": {
      /* Basic Options */
      "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016'. */
      "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      "outDir": "./out",                        /* Redirect output structure to the directory. */
      /* Strict Type-Checking Options */
      "strict": true,                           /* Enable all strict type-checking options. */
      "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
    },
    "exclude": ["node_modules"]
}
```