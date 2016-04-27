import Owned from "Owner.sol"

contract Company is Owned {
	string LEI;
	string OfficialEntityName;
	string Address;
	string Region;
	string EntityStatus;
	string OfficialRegistry;
	string OfficialRegistryRef;

	// Construct values
	Company(_LEI,_OfficialEntityName,_Address,_Region,_EntityStatus,_OfficialRegistry,_OfficialRegistryRef) {
		LEI = _LEI;
		OfficialEntityName = _OfficialEntityName;
		Address = _Address;
		Region = _Region;
		EntityStatus = _EntityStatus;
		OfficialRegistry = _OfficialRegistry;
		OfficialRegistryRef = _OfficialRegistryRef;
	}
		

}