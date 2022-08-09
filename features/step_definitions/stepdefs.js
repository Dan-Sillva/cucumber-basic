const assert = require('assert')
const {Given, Then, When} = require('@cucumber/cucumber')

function isItFriday(today){
    return today === 'Friday' ? 'Yeah' : 'Nope'
}

Given('today is {string}', function (getDay) {
    this.today = getDay
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today)
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer)
});