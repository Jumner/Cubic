use btleplug::api::{
	bleuuid::uuid_from_u16, Central, Manager as _, Peripheral as _, ScanFilter, WriteType,
};
use btleplug::platform::{Adapter, Manager, Peripheral};
use rand::{thread_rng, Rng};
use std::error::Error;
use std::thread;
use std::time::Duration;
use tokio::process::Command;
use tokio::time;
use uuid::Uuid;
#[tokio::main]
async fn main() -> std::io::Result<()> {
	let manager = Manager::new().await.unwrap();
	let adapters = manager.adapters().await.expect("Unable to get adapters");
	let central = adapters
		.into_iter()
		.nth(0)
		.expect("Unable to find adapters");

	central
		.start_scan(ScanFilter::default())
		.await
		.expect("Unable to scan");
	time::delay_for(Duration::from_secs(2)).await;

	let cubic = find_cubic(&central).await.expect("Could not find cubic");
	cubic.connect().await.expect("Could not connect to cubic");
	// cubic
	// 	.properties()
	// 	.await
	// 	.unwrap()
	// 	.unwrap()
	// 	.services
	// 	.iter()
	// 	.for_each(|x| println!("{:?}", x));
	// cubic.discover_services().await?;
	// cubic.services().iter().for_each(|x| {
	// 	println!("{}", x.uuid);
	// });

	let out = Command::new("date")
		// .args(&["hello", "world"])
		.output()
		.await?;
	let s = String::from_utf8_lossy(&out.stdout);
	println!("{}", s);
	println!("Hello, world!");
	Ok(())
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

async fn find_cubic(central: &Adapter) -> Option<Peripheral> {
	for p in central.peripherals().await.unwrap() {
		if p
			.properties()
			.await
			.unwrap()
			.unwrap()
			.local_name
			.iter()
			.any(|name| name.contains("hc-05"))
		{
			return Some(p);
		}
	}
	None
}
