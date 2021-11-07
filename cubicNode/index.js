const { createBluetooth } = require('node-ble');
const { bluetooth, destroy } = createBluetooth();

function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function setupBle() {
	const adapter = await bluetooth.defaultAdapter();
	if (!(await adapter.isDiscovering())) await adapter.startDiscovery();
	console.log('Done ble setup');
	return adapter;
}

async function connectCubic() {
	const adapter = await setupBle();
	let devices = await Promise.all(
		await (
			await adapter.devices()
		).map(async device => {
			const dev = await adapter.getDevice(device);
			const name = await dev.getAlias();
			return { device: dev, name: name };
		})
	); // Fuck async js sometimes
	devices = devices
		.filter(device => {
			return device.name == 'HC-06';
		})
		.map(device => {
			console.log('Cubic found!');
			return device.device;
		});
	if (devices.length == 0) {
		throw 'Cubic not found :(';
	}
	const cubic = devices[0];
	console.log(cubic);
}

connectCubic();
