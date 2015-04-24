import Ember from 'ember';

export default Ember.Controller.extend({
  text: null,
  result: "",
  actions: {
    submit: function(text) {
      var formattedText;
      var _this = this;

      return Ember.$.getJSON('http://localhost:3000/text?text=' + text).then(function(results) {
        Ember.run(function() {
          formattedText = results.text;
          _this.set('result', formattedText);
        });
      });
    }
  }
});
