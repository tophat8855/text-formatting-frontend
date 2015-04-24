import Ember from 'ember';

export default Ember.Controller.extend({
  text: null,
  result: "",
  actions: {
    submit: function() {
      console.log("submitted");
    }
  }
});
