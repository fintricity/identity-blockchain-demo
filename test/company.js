contract('Company', function(accounts) {
  
  // Constructor for defaultu Deutchse bank company
  function defaultCompany() {
      return Company.new(
        "7LTWFZYICNSX8D621K86",
        "DEUTSCHE BANK AKTIENGESELLSCHAFT",
        "Taunusanlage 12, Frankfurt am Main, 60325",
        "DE",
        "Frankfurt am Main",
        "HRB 30000",
        {from: accounts[0]})
  }

  it("should create a company addredss of owner who creates company", function(done) {
    defaultCompany().then(function(company) {
      company.owner.call().then(function(address) {
        assert.isNotNull(address, "Expected an owners address!")
        assert.equal(address, accounts[0], "Owner address is not the same as account who created company!")
        done()
      }).catch(done)
    }).catch(done);
  });



  // it("should call a function that depends on a linked library  ", function(done){
  //   var meta = MetaCoin.deployed();
  //   var metaCoinBalance;
  //   var metaCoinEthBalance;

  //   meta.getBalance.call(accounts[0]).then(function(outCoinBalance){
  //     metaCoinBalance = outCoinBalance.toNumber();
  //     return meta.getBalanceInEth.call(accounts[0]);
  //   }).then(function(outCoinBalanceEth){
  //     metaCoinEthBalance = outCoinBalanceEth.toNumber();
      
  //   }).then(function(){
  //     assert.equal(metaCoinEthBalance,2*metaCoinBalance,"Library function returned unexpeced function, linkage may be broken");
      
  //   }).then(done).catch(done);
  // });

  // it("should send coin correctly", function(done) {
  //   var meta = MetaCoin.deployed();

  //   // Get initial balances of first and second account.
  //   var account_one = accounts[0];
  //   var account_two = accounts[1];

  //   var account_one_starting_balance;
  //   var account_two_starting_balance;
  //   var account_one_ending_balance;
  //   var account_two_ending_balance;

  //   var amount = 10;

  //   meta.getBalance.call(account_one).then(function(balance) {
  //     account_one_starting_balance = balance.toNumber();
  //     return meta.getBalance.call(account_two);
  //   }).then(function(balance) {
  //     account_two_starting_balance = balance.toNumber();
  //     return meta.sendCoin(account_two, amount, {from: account_one});
  //   }).then(function() {
  //     return meta.getBalance.call(account_one);
  //   }).then(function(balance) {
  //     account_one_ending_balance = balance.toNumber();
  //     return meta.getBalance.call(account_two);
  //   }).then(function(balance) {
  //     account_two_ending_balance = balance.toNumber();

  //     assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
  //     assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
  //   }).then(done).catch(done);
  // });
});
