const assert = require('assert')
const {Given, Then, When} = require('@cucumber/cucumber')

function isItFriday(today){
    return today === 'Friday' ? 'Yeah' : 'Nope'
}

Given('today is Sunday', function () {
    this.today = 'Sunday'
});

Given('today is Friday', function() {
    this.today = 'Friday'
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today)
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer)
});