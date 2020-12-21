const getAdaptiveLoadingData = async () => {
    try {
        if ('navigator' in window) {
            const {
                deviceMemory,
                hardwareConcurrency,
                connection,
                userAgentData
            } = window.navigator;
            
            const { level, charging } = await navigator.getBattery();
            const { quota } = await navigator?.storage?.estimate();
    
            const adaptiveData = {
                battery: {},
                network: {}
            };
    
            // RAM memory > 1 -> load costly stuff
            // <meta http-equiv="Accept-CH" content="Device-Memory">
            deviceMemory && (adaptiveData.memory = deviceMemory);
    
            // CPU cpu > 4 -> load costly stuff
            hardwareConcurrency && (adaptiveData.cpu = hardwareConcurrency); 
    
            // connection === '4g' -> load constly stuff
            connection?.effectiveType && (adaptiveData.network.connection = connection.effectiveType);
    
            // <meta http-equiv="Accept-CH" content="Downlink">
            // downlink > 6 -> load costly stuff
            connection?.downlink && (adaptiveData.network.downlink = connection.downlink);
    
            // !isMobile -> load costly stuff
            userAgentData?.mobile && (adaptiveData.isMobile = userAgentData.mobile);
    
            //Batter (charging || level > 2) -> load costly stuff 
            level && (adaptiveData.battery.level = level);
            charging && (adaptiveData.battery.charging = charging);
    
            // Quota quota > xyMB -> load costly stuff
            quota && (adaptiveData.quota = quota);
    
            return adaptiveData;
        } else {
            throw new Error('Navigator object is not supported on your env.');
        }
    } catch (e) {
        throw new Error(`Something went wrong: ${e}`);
    }
}

export default getAdaptiveLoadingData;