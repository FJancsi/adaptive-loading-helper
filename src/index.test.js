/**
 * @jest-environment jsdom
 */

import getAdaptiveLoadingData from './index.js';

describe('Adaptive Loading', () => {

    beforeAll(() => {
        window.navigator.connection = {};
        window.navigator.storage = {};
        window.navigator.userAgentData = {};

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

        Object.defineProperty(window.navigator.connection, 'downlink', {
            writable: true,
            value: 6,
        });

        Object.defineProperty(window.navigator.userAgentData, 'mobile', {
            writable: true,
            value: true,
        });

        Object.defineProperty(window.navigator, 'getBattery', {
            writable: true,
            value: () => new Promise(resolve => (resolve({level: 3, charging: true}))),
        });

        Object.defineProperty(window.navigator.storage, 'estimate', {
            writable: true,
            value: () => new Promise(resolve => (resolve({quota: 50 * 1000 * 1000}))),
        });
    });

    it('module is defined', () => {
        expect(getAdaptiveLoadingData).toBeDefined();
    });

    it('should return memory', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.memory).toBe(8);
    });

    it('should return cpu', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.cpu).toBe(6);
    });

    it('should return connection', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.network.connection).toBe('4g');
    });

    it('should return downlink', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.network.downlink).toBe(6);
    });

    it('should return isMobile user agen data', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.isMobile).toBeTruthy();
    });

    it('should return battery level data', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.battery.level).toBe(3);
    });

    it('should return battery charging data', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.battery.charging).toBe(true);
    });

    it('should return quota data', async () => {
        const adaptiveData = await getAdaptiveLoadingData();
        expect(adaptiveData.quota).toBe(50 * 1000 * 1000);
    });

    it('should throw error if navigator is not supported', async () => {
        delete window.navigator;

        await expect(getAdaptiveLoadingData())
            .rejects
            .toThrow('Something went wrong: Error: Navigator object is not supported on your env.');
    });
});