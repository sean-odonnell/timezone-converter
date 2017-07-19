eslint-config-ta
=======================

[ESlint](http://www.eslint.org) config for TechnologyAdvice.

```
npm i eslint-config-ta -D
```

## Usage

[Extend](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) relevant `ta/*` rules in your
`.eslintrc`.

### Root Config

In the project root:

```json
{
  "extends": [
    "ta",
    "ta/(backend|frontend)"
  ]
}
```

### Test Config

Use the test config to customize rules for the `/test` directory:

```json
{
  "extends": [
    "ta/(backend|frontend)/test"
  ]
}
```

### Environment Detection
At the root of each group (e.g. `ta`, `ta/(frontend|backend)`) is an `index.js` file. It will select the appropriate
configuration file based on the current `NODE_ENV`. For example, where your `.eslintrc` is:

```json
{
  "extends": [
    "ta",
    "ta/frontend"
  ]
}
```

When you run `NODE_ENV=production eslint . ./`, `eslint-config-ta` will handle extending the correct configuration
files, so under the hood it looks like this:

```json
{
  "extends": [
    "ta/organization/production",
    "ta/frontend/production"
  ]
}
```

### Releasing

On the latest clean `master`:

    npm run release:major
    npm run release:minor
    npm run release:patch
