## Changed

### Moves `diff` to a separate module

```diff
- import semver from 'semver'
- semver.diff(a, b)
+ import diff from 'semver/diff'
+ diff(a, b)
```
