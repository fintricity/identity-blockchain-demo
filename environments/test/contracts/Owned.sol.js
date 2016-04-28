// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a0319163317905560b48060226000396000f3606060405260e060020a600035046341c0e1b58114602e5780638da5cb5b14604a578063a6f9dae114605b575b005b602c60005433600160a060020a03908116911614156084576002565b607a600054600160a060020a031681565b602c60043560005433600160a060020a03908116911614156092576002565b6060908152602090f35b600054600160a060020a0316ff5b6000805473ffffffffffffffffffffffffffffffffffffffff1916821790555056",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560b48060226000396000f3606060405260e060020a600035046341c0e1b58114602e5780638da5cb5b14604a578063a6f9dae114605b575b005b602c60005433600160a060020a03908116911614156084576002565b607a600054600160a060020a031681565b602c60043560005433600160a060020a03908116911614156092576002565b6060908152602090f35b600054600160a060020a0316ff5b6000805473ffffffffffffffffffffffffffffffffffffffff1916821790555056",
    address: "0xb87bfe6284113b635520fa45c8e4b207d86acf38",
    generated_with: "2.0.6",
    contract_name: "Owned"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Owned = Contract;
  }

})();
