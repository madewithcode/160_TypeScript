var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Vinay',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=exercise1.js.map