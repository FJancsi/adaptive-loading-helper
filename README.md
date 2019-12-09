[![Known Vulnerabilities](https://snyk.io/test/github/FJancsi/adaptive-loading-helper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/FJancsi/adaptive-loading-helper?targetFile=package.json)
[![Downloads](https://img.shields.io/npm/dm/adaptive-loading-helper.svg)](https://npmcharts.com/compare/adaptive-loading-helper?minimal=true)
[![npm](https://img.shields.io/npm/v/adaptive-loading-helper.svg)](https://www.npmjs.com/package/adaptive-loading-helper)
[![license](https://img.shields.io/npm/l/adaptive-loading-helper.svg)](https://www.npmjs.com/package/adaptive-loading-helper)

# Adaptive loading helper 🚀
Helper util to get info about the target platform performance

## Example

```shell
$ npm install adaptive-loading-helper
```

```javascript
const { getAdaptiveLoadingData } = require('adaptive-loading-helper');
// ES2015 modules
import getAdaptiveLoadingData from 'adaptive-loading-helper';

const adaptiveData = getAdaptiveLoadingData();
console.log(adaptiveData);
// { cpu: 4, memory: 8, connection: '4g' }
```
