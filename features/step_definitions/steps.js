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

  this.When('I submit the form "$string"', function (formName) {
    browser.submitForm(`#${formName}`)
  })

  this.Then('I can see the cafe name "$string"', function (name, callback) {
    var cafeNameExists = browser.waitForExist(`h1=${name}`)
    assert.equal(cafeNameExists, true, callback)
  })

  this.Then('I can see the "$string" item "$string"', function (element, value, callback) {
    var inputItemExists = browser.waitForExist(`${element}[text=${value}]`)
    assert.equal(inputItemExists, true, callback)
  })

  this.Then('I can see the list item "$string"', function (text, callback) {
    var listItemExists = browser.waitForExist(`li=${text}`)
    assert.equal(listItemExists, true, callback)
    })

}

  //
  // this.Then('I am redirected to "$string"', function (pathname, callback) {
  //   browser.waitForExist('body')
  //   var url = browser.getUrl()
  //   assert.equal(Url.parse(url).pathname, pathname, callback)
  // })
  //
  // this.Then('I am redirected to the "$string" page', function (pathname, callback) {
  //   browser.waitForExist('body')
  //   var url = browser.getUrl()
  //   assert.equal(Url.parse(url).pathname, pathname, callback)
  // })
