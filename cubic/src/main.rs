use blurz::{
	BluetoothAdapter, BluetoothDevice, BluetoothDiscoverySession, BluetoothEvent,
	BluetoothGATTCharacteristic, BluetoothSession,
};
fn main() {
	let bt_session = &BluetoothSession::create_session(None).unwrap();
	let adapter: BluetoothAdapter = BluetoothAdapter::init(bt_session).unwrap();
	let adapter_id = adapter.get_id();
	let discover_session =
		BluetoothDiscoverySession::create_session(&bt_session, adapter_id).unwrap();
	discover_session.start_discovery().unwrap();
	let device_list = adapter.get_device_list().unwrap();
	discover_session.stop_discovery().unwrap();
	println!("Hello, world!\n{:?}", device_list);
}

#[cfg(test)]
mod tests {
	// Tests module
	// use super::*;

	#[test]
	fn it_works() {
		assert_eq!(4, 2 + 2);
	}
}
