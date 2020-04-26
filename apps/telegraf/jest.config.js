module.exports = {
  name: 'telegraf',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/telegraf',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
