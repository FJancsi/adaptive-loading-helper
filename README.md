# adaptive-loading-helper
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
