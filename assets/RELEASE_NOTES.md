# v5.0.0

Arbitrary release notes description containing meaningful information for developers, but not so much for the machines that would be parsing this document.

## Removed

> "Removed" is the category for API changes that do not have a migration path or a suitable alternative suggested by the package owner. If there is an alternative to the removed API then it belongs to the "Changed" category.

- `getStats`
- `sortByName`, removed due to performance issues.

## Added

> "Added" category is mainly informational as there is nothing to remove nor migrate. Users upgrading to this major version would be shown that these new things are now present with the links to browse their source code.

- `generateTypeDefinitions` (+ reference link fixed to the release tag that points to this new API source code)

## Changed

### Method location change

```diff
- import semver from 'semver'
- semver.diff(a, b)
+ import semverDiff from 'semver/diff'
+ semverDiff(a, b)
```

### Method call signature change

```diff
import analyze from 'lib'
- analyze(data, options)
+ analyze(data, encoding, options)
```

#### Parameters

<!-- Get a new param based on existing param -->

- `encoding` -> `options.encoding`

### Complex webpack configuration change

```diff
# webpack.config.js
module.exports = {
  module: {
    rules: [
      {
-       options,
      }
    ]
  },
+ loaderOptions: options
}
```

#### Transform `options`

- `options.name` => `options.loaderName`

```diff
{
- name: 'svg'
+ loaderName: 'svg-loader'
}
```

### Babel configuration change

```diff
# babel.config.js
module.exports = {
  presets: [
-   'babel-presets/env',
+   '@babel/presets-env'
  ]
}
```

#### Dependencies

> Red dependencies to be uninstalled, green dependencies to be instsalled. All dependencies are related to the change they are declared in.

```diff
- babel-presets/env
+ @babel/presets-env@8.x (--save-dev)
```

### HMR now uses a different babel plugin

```diff
# babel.config.js
module.exports = {
  presets: [
+   '@babel/presets-hmr'
  ],
  plugins: [
-   'hot-loader/babel'
  ]
}
```
