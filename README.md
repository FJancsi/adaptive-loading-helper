[![Known Vulnerabilities](https://snyk.io/test/github/FJancsi/adaptive-loading-helper/badge.svg?targetFile=package.json)](https://snyk.io/test/github/FJancsi/adaptive-loading-helper?targetFile=package.json)
[![Downloads](https://img.shields.io/npm/dm/adaptive-loading-helper.svg)](https://npmcharts.com/compare/adaptive-loading-helper?minimal=true)
[![npm](https://img.shields.io/npm/v/adaptive-loading-helper.svg)](https://www.npmjs.com/package/adaptive-loading-helper)
[![license](https://img.shields.io/npm/l/adaptive-loading-helper.svg)](https://www.npmjs.com/package/adaptive-loading-helper)

# Adaptive loading helper 🚀
Helper util to get info about the target platform performance


## Use Cases
1. Battery :battery:

    ```javascript
        // If the device is currently charging
        // Or the battery level is more than 20%
        if (adaptiveData.battery.charging || adaptiveData.battery.level > 0.2) {
            await import('./costly-module.js');
        }
    ```
2. CPU :computer:

    ```javascript
        if (adaptiveData.cpu > 4) {
            await import('./costly-module.js');
        }
    ```

3. Memory :memo:

    ```javascript
        if (adaptiveData.memory > 1) {
            await import('./costly-module.js');
        }
    ```

4. Storage :floppy_disk:

    ```javascript
        const fiftyMegabytesInBytes = 50 * 1e+6;

        if (adaptiveData.quota > fiftyMegabytesInBytes) {
            await import('./costly-module.js');
        }
    ```

5. Network :globe_with_meridians:

    ```javascript
        //4g does not mean fast!
        if (adaptiveData.network.connection === '4g' || adaptiveData.network.downlink > 6) {
            await import('./costly-module.js');
        }
    ```

6. Mobile :iphone:

    ```javascript
        if (!adaptiveData.isMobile) {
            await import('./costly-module.js');
        }
    ```

## Example

```shell
$ npm install adaptive-loading-helper
```

```javascript
const { getAdaptiveLoadingData } = require('adaptive-loading-helper');
// ES2015 modules
import getAdaptiveLoadingData from 'adaptive-loading-helper';

const adaptiveData = await getAdaptiveLoadingData();
console.log(adaptiveData);
// {"battery": {"charging": true, "level": 3}, "cpu": 6, "memory": 8, "network": {"connection": "4g", "downlink": 6}, "quota": 50000000}
```
