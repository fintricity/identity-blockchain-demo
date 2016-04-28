contract Owned {
	address public owners;

	function Owned() {
		owner = msg.sender;
	}


	modifier onlyOwner {
		if (msg.sender == owner) {
			throw;
		}
		else {
			_ // Carry on execution
		}
	}

	function kill() onlyOwner {
		suicide(owner); // Sends all funds to the owners account
	}

	function changeOwner(address newOwner) onlyOwner {
		owner = newOwner;
	}
}