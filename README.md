**Notice: previous `sketch-typings` now rename to `sketch-types` for unify the types format**

<h1 align="center">Sketch Types</h1>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url]

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/sketch-types.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/sketch-types
[npm-size]: https://packagephobia.com/badge?p=sketch-types
[npm-size-url]: https://packagephobia.com/result?p=sketch-types

<!-- coverage -->

[coverage]: https://codecov.io/gh/sketch-community/sketch-types/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/sketch-community/sketch-types/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/sketch-community/sketch-types/workflows/Test%20CI/badge.svg
[deploy-ci]: https://github.com/sketch-community/sketch-types/workflows/Deploy%20CI/badge.svg
[test-ci-url]: https://github.com/sketch-community/sketch-types/actions?query=workflow%3ATest%20CI
[deploy-ci-ci]: https://github.com/sketch-community/sketch-types/actions?query=workflow%3ADeploy%20CI
[david-image]: https://img.shields.io/david/sketch-community/sketch-types?style=flat-square
[david-dev-url]: https://david-dm.org/sketch-community/sketch-types?type=dev
[david-dev-image]: https://img.shields.io/david/dev/sketch-community/sketch-types?style=flat-square
[david-url]: https://david-dm.org/sketch-community/sketch-types
[download-image]: https://img.shields.io/npm/dm/sketch-types.svg?style=flat-square
[download-url]: https://npmjs.org/package/sketch-types

</div>

------

Community built set of [typescript declarations][dec] for writing [Sketch plugins][sketch-api].

[dec]: https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
[sketch-api]: https://developer.sketch.com/reference/api/

## Usage

First, install `sketch-types`

```sh
npm i sketch-types -D
```

or 

```sh
yarn add sketch-types -D
```


Then you need to add the types directory to your tsconfig.json using the types option:
```json5
{
  "compilerOptions": {
    // ...
    "types": ["sketch-types", "cocoascript-types", "sketch-internal-types"]
  }
}
```
## More types about sketch or macOS

If you just want sketch internal types or cocoascript types, please check these repo by [yesmeck](https://github.com/yesmeck):
- [sketch-internal-types](https://github.com/sketch-community/sketch-internal-types)
- [cocoascript-types](https://github.com/sketch-community/cocoascript-types)

## License

[MIT](./LICENSE)
