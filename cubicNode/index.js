const noble = require('noble');

noble.on('stateChange', state => {
	if (state === 'poweredOn') {
		console.log('Scanning');
		noble.startScanning();
	} else {
		noble.stopScanning();
	}
});

noble.on('discover', device => {
	noble.stopScanning();
	const name = device.advertisement.localName;
	console.log('[' + device.address + ']: ' + name);
});
