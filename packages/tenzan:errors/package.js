Package.describe({
  name: 'tenzan:errors',
  summary: 'A pattern to display application errors to the user',
  version: '1.0.0'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.0.2.1');
  
  api.use(['mini-mongo','mongo-livedata', 'templating'], 'client');
  
  api.addFiles('tenzan:errors.js');
  
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('tenzan:errors');
//   api.addFiles('tenzan:errors-tests.js');
// });
