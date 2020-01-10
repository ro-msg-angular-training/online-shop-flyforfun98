exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['app.product-detail-flow.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true
  }
};
