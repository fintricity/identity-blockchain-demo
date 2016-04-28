import {Owned} from "Owned.sol";

contract Company is Owned {
	string LEI;
	string OfficialEntityName;
	string Address;
	string Region;
	string EntityStatus;
	string OfficialRegistry;
	string RegRef;

	event LogOwner(address _owner);
	event LogLei(string LEI);

	// Construct values
	function Company(string _LEI, string _OfficialEntityName, string _Address, string _Region, string _OfficialRegistry, string _RegRef) Owned() {
		LEI = _LEI;
		OfficialEntityName = _OfficialEntityName;
		Address = _Address;
		Region = _Region;
		OfficialRegistry = _OfficialRegistry;
		RegRef = _RegRef;
	}

	// TODO
	function issueShares()

	// Buy Shares.
	function buyShares();

	// sell them.
	function sellShares();
}