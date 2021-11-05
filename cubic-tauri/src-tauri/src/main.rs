#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate rand;
use tauri::Manager;
// use blurz::bluetooth_adapter::BluetoothAdapter;
// use blurz::bluetooth_device::BluetoothDevice;
// use blurz::bluetooth_discovery_session::BluetoothDiscoverySession;
// use blurz::bluetooth_event::BluetoothEvent;
// use blurz::bluetooth_gatt_characteristic::BluetoothGATTCharacteristic;
// use blurz::bluetooth_gatt_descriptor::BluetoothGATTDescriptor;
// use blurz::bluetooth_gatt_service::BluetoothGATTService;
// use blurz::bluetooth_obex::BluetoothOBEXSession;
// use blurz::bluetooth_session::BluetoothSession;

fn main() {
  // Bt setup
  // let bt_session = &BluetoothSession::create_session(None).unwrap();
  // let adapter: BluetoothAdapter = BluetoothAdapter::init(bt_session).unwrap();
  // let adapter_id = adapter.get_id();
  // println!("{:?}", adapter_id);

  #[tauri::command]
  async fn ping(window: tauri::Window) {
    // Receive ping
    window.emit("ping", 1).expect("failed");
    // Send response

    // std::thread::sleep(std::time::Duration::from_millis(2000));
    // telem(window); // Start telemetry
  }

  #[tauri::command]
  async fn bluetooth(number: u32) -> u32 {
    // window.emit("bluetooth", 6).expect("failed");
    // Receive front end bt setup
    number.into()
  }

  fn telem(window: tauri::Window) {
    // Start telemetry
    window.emit("ping", 2).expect("failed"); // Set state to connected (over bluetooth)
    let mut data: u8;
    loop {
      // Poggers infinite loop
      data = rand::random::<u8>();
      window.emit("telemetry", data).expect("failed");
      std::thread::sleep(std::time::Duration::from_millis(1000));
    }
  }

  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![ping, bluetooth]) // Allow react to ping rust
    .setup(|app| {
      let ping = app.listen_global("ping", |e| {
        app.emit_all("ping", 5).unwrap();
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
  // let discover_session =
  //   BluetoothDiscoverySession::create_session(&bt_session, adapter_id).unwrap();
  // discover_session.start_discovery().unwrap();
  // let device_list = adapter.get_device_list().unwrap();
  // discover_session.stop_discovery().unwrap();
}
