basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'dev/js/lib/lodash.min.js',
  'dev/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome', 'Firefox'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
