fn main() {
	println!("Hello, world!");
}

#[cfg(test)]
mod tests {
	// Tests module
	use super::*;

	#[test]
	fn it_works() {
		assert_eq!(4, 2 + 2);
	}
}
