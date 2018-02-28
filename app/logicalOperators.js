exports = typeof window === 'undefined' ? global : window;
//how are these right?
exports.logicalOperatorsAnswers = {
  or: function(a, b) {
  	return a || b;
  },

  and: function(a, b) {
  	return a && b;
  }
};
