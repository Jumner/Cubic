#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

extern crate rand;

#[tauri::command]
async fn ping(window: tauri::Window) {
  // Receive ping
  window.emit("ping", 1).expect("failed"); // Send response
  std::thread::sleep(std::time::Duration::from_millis(2000));
  telem(window); // Start telemetry
}

fn telem(window: tauri::Window) {
  // Start telemetry
  window.emit("ping", 2).expect("failed"); // Set state to connected (over bluetooth)
  let mut data: u8;
  loop {
    // Poggers infinite loop
    data = rand::random::<u8>();
    window.emit("telemetry", data).expect("failed");
    std::thread::sleep(std::time::Duration::from_millis(100));
  }
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![ping]) // Allow react to ping rust
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
