var assert = require('cucumber-assert')
var Url = require('url')
var extend = require('xtend')

var config = require('../../config')

module.exports = function () {

  this.Given('I am viewing the page at "$string"', function (pathname) {
    browser.url(Url.format(extend(config.proxy, { pathname: pathname })))
  })

  this.When('I enter "$string" into the "$string" with the id "$string"', function (text, element, id) {
    browser.setValue(`${element}[id=${id}]`, text)
  })

  this.When('I click on the button with value "$string"', function (value) {
    browser.click(`button[value="${value}"]`)
  })

  this.When('I submit the form "$string"', function (formName) {
    browser.submitForm(`#${formName}`)
  })

  this.Then('I can see the element with the id "$string"', function (name, callback) {
    var cafeNameExists = browser.waitForExist(`#${name}`, 5000)
    assert.equal(cafeNameExists, true, callback)
  })

  this.Then('I can see that the element with the id "$string" is not "$string"', function (element, emptyValue, callback) {
    var elementExists = browser.waitForExist(`#${element}`, 5000)
    const text = browser.getText(`#${element}`)
    assert.notEqual(text, emptyValue, callback)
  })

  this.Then('I can see status change to "$string"', function (name, callback) {
    var statusNameExists = browser.waitForExist(`span=${name}`, 5000)
    assert.equal(statusNameExists, true, callback)
  })

  this.Then('I can see the "$string" item "$string"', function (element, value, callback) {
    var inputItemExists = browser.waitForExist(`${element}[text=${value}]`, 5000)
    assert.equal(inputItemExists, true, callback)
  })


}
