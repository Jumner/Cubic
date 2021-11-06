const { createBluetooth } = require('node-ble');
const { bluetooth, destroy } = createBluetooth();

async function setupBle() {
	const adapter = await bluetooth.defaultAdapter();
	let isDiscovering = await adapter.isDiscovering();
	if (!isDiscovering) await adapter.startDiscovery();
	console.log('done');
}
setupBle();
