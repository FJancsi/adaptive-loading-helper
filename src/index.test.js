import getAdaptiveLoadingData from './index.js';

describe('Adaptive Loading', () => {

    beforeAll(() => {
        window.navigator.connection = {};

        Object.defineProperty(window.navigator, 'deviceMemory', {
            writable: true,
            value: 8,
        });

        Object.defineProperty(window.navigator, 'hardwareConcurrency', {
            writable: true,
            value: 6,
        });

        Object.defineProperty(window.navigator.connection, 'effectiveType', {
            writable: true,
            value: '4g',
        });
    });

    it('module is defined', () => {
        expect(getAdaptiveLoadingData).toBeDefined();
    });

    it('should return deviceMemory', () => {
        const adaptiveData = getAdaptiveLoadingData();
        expect(adaptiveData.memory).toBe(8);
    });

    it('should return hardwareConcurrency', () => {
        const adaptiveData = getAdaptiveLoadingData();
        expect(adaptiveData.cpu).toBe(6);
    });

    it('should return hardwareConcurrency', () => {
        const adaptiveData = getAdaptiveLoadingData();
        expect(adaptiveData.connection).toBe('4g');
    });

    it('should return mobile user agen data', () => {
        const adaptiveData = getAdaptiveLoadingData();
        expect(adaptiveData.mobile).toBeFalsy();
    });

    it('should throw error if navigator is not supported', () => {
        delete window.navigator;
        const getInfo = () => getAdaptiveLoadingData();
        expect(getInfo).toThrowError(new Error('Navigator object is not supported on your env.'));
    });
});