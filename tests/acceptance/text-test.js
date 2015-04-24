import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'text-formatter/tests/helpers/start-app';

var application;

module('Acceptance: Text', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /text', function(assert) {
  visit('/text');

  andThen(function() {
    assert.equal(currentURL(), '/text');
  });
});

test ('text returns from API', function(assert) {
  visit('/text');

  fillIn('#textbox', 'hello world');
  click('#submitText');

  andThen(function() {
    var formattedText = $('#result').text().trim();
    assert.equal(formattedText, "Hello world");
  });
});
