const { GemeenteNijmegenCdkLib } = require('@gemeentenijmegen/projen-project-type');

const projectName = '@gemeentenijmegen/aws-constructs';

const project = new GemeenteNijmegenCdkLib({
  cdkVersion: '2.28.0',
  author: 'Gemeente Nijmegen',
  repository: 'https://github.com/GemeenteNijmegen/modules-aws-constructs.git',
  name: projectName,
  description: 'AWS CKD constructs for Gemeente Nijmegen',
  defaultReleaseBranch: 'main',
  packageName: projectName,
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'],
    },
  },
  devDeps: [
    '@gemeentenijmegen/projen-project-type',
  ],
});
project.synth();