contract Owned {
	address owner;

	Owned() {
		owner = msg.sender
	}

	kill() {
		if (msg.sender != owner) {
			throw;
		}
		suicide(owner) // Sends all funds to the owners account
	}

	modifier onlyOwner {
		if msg.sender == owner {
			_ // Carry on execution
		}
	}
}