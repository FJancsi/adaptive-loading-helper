const getAdaptiveLoadingData = () => {
    if ('navigator' in window) {
        const {
            deviceMemory,
            hardwareConcurrency,
            connection
        } = window.navigator,
            adaptiveData = {};

            deviceMemory && (adaptiveData.memory = deviceMemory);
            hardwareConcurrency && (adaptiveData.cpu = hardwareConcurrency);
            connection && connection.effectiveType && (adaptiveData.connection = connection.effectiveType);

            return adaptiveData;
    } else {
        throw new Error('Navigator object is not supported on your env.');
    }
}

export default getAdaptiveLoadingData;