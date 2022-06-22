const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');

const projectName = '@gemeentenijmegen/aws-constructs';

const project = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: '2.28.0',
  author: 'Gemeente Nijmegen',
  repository: 'https://github.com/GemeenteNijmegen/modules-aws-constructs.git',
  name: projectName,
  description: 'AWS CKD constructs for Gemeente Nijmegen',
  defaultReleaseBranch: 'main',
  packageName: projectName,
  release: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  bundledDeps: ["@types/jest@27.4.1"], // TODO: work around https://github.com/projen/projen/issues/1941
});
project.synth();