const { typescript } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');

const projectName = '@gemeentenijmegen/aws-constructs';

const project = new typescript.TypeScriptProject({
  name: projectName,
  license: 'EUPL-1.2',
  description: 'AWS CKD constructs for Gemeente Nijmegen',
  defaultReleaseBranch: 'main',
  packageName: projectName,
  release: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs',
  ],
});
project.synth();