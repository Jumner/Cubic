const { createBluetooth } = require('node-ble');
const { bluetooth, destroy } = createBluetooth();

function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

async function findCubic() {
	const adapter = await bluetooth.defaultAdapter();
	if (!(await adapter.isDiscovering())) await adapter.startDiscovery();
	await sleep(1000);
	await adapter.stopDiscovery();
	let devices = await Promise.all(
		await (
			await adapter.devices()
		).map(async device => {
			const dev = await adapter.waitDevice(device);
			const name = await dev.getAlias();
			return { name: name, uuid: device };
		})
	); // Fuck async js sometimes
	devices = devices
		.filter(device => {
			return device.name == 'HC-06';
		})
		.map(device => {
			console.log('Cubic found!');
			return device.uuid;
		});
	if (devices.length == 0) {
		throw 'Cubic not found :(';
	}
	const cubic = devices[0];
	console.log(cubic);
	await connectCubic(cubic).catch(err => {
		throw err;
	});
}

async function connectCubic(uuid) {
	const adapter = await bluetooth.defaultAdapter();
	const cubic = await adapter.waitDevice(uuid);
	console.log(await cubic.toString());
	if (!(await cubic.isPaired())) await cubic.pair();
	console.log('Cubic Paired');
	console.log(await cubic.isConnected());
	console.log(await (await cubic.gatt()).services());
	if (!(await cubic.isConnected())) await cubic.connect();
	console.log('Cubic connected');
	const gatt = await cubic.gatt();
	console.log('gatt server created');
	// print(cubic.pair());
	console.log('closing down');
	await cubic.disconnect();
	destroy();
}

findCubic().catch(err => {
	console.log(err);
});
