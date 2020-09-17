let client;

if (typeof ZAFClient === 'undefined') { // eslint-disable-line no-undef
    throw new Error("ZAFClient cannot run outside Zendesk");
} else {
    client = ZAFClient.init(); // eslint-disable-line no-undef
    client.invoke('resize', { width: '100%', height: '200px' });
}

export default client;
