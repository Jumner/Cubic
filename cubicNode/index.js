const bt = require('node-bluetooth');

const device = new bt.DeviceINQ();
device
	.on('finished', console.log.bind(console, 'finished'))
	.on('found', (address, name) => {
		console.log('Found: ' + address + ': ' + name);
	})
	.scan();
