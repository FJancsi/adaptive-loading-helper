const getAdaptiveLoadingData = () => {
    if ('navigator' in window) {
        const {
            deviceMemory,
            hardwareConcurrency,
            connection,
            userAgentData
        } = window.navigator,
            adaptiveData = {};

        deviceMemory && (adaptiveData.memory = deviceMemory);
        hardwareConcurrency && (adaptiveData.cpu = hardwareConcurrency);
        connection?.effectiveType && (adaptiveData.connection = connection.effectiveType);
        userAgentData?.mobile && (adaptiveData.isMobile = userAgentData.mobile);

        return adaptiveData;
    } else {
        throw new Error('Navigator object is not supported on your env.');
    }
}

export default getAdaptiveLoadingData;