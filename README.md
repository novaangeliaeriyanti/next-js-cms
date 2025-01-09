# [ CMS BOILERPLATE ]
[CMS Dashboard Application created from NextJs]

**Tools**
- Using `vscode` as IDE is recommended
- Using `eslint` for linting

**Setup**
- Install `node`
- Run `npm install`
- Run the web using the script

**Script**
- `npm run dev` to run on development mode
- `npm run build:[environment]` to build on specific environment
- `npm run start` to start the application

**Folder Structures**
- deploy (environtment folder for build)
- public (local asset)
- src
    - components (dumb components)
    - features (smart components)
    - pages (for routing only)
    - shared
        - api
        - constants
        - hooks
        - lib
        - model
        - store
        - styles

**Naming Convention**
- file name for routing use kebab-case, other file names use camelCase
- component file name should using .jsx/tsx extension, and .js/ts for non-component js/ts files
- component definition use PascalCase
- variable name use camelCase
- constant name use SNAKE_CASE_WITH_UPPERCASE
- DOM id use snake_case_with_lowercase
- DOM class name use kebab-case-with-lowercase
- Boolean variable should has **is** prefix for isBooleanVariableName

**Code Guideline**
- use const and let, avoid using var as variable declaration
- indentation use 2 spaces
- 

