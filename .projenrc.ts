import { GemeenteNijmegenCdkLib } from '@gemeentenijmegen/projen-project-type';

const projectName = '@gemeentenijmegen/aws-constructs';

const project = new GemeenteNijmegenCdkLib({
  cdkVersion: '2.28.0',
  constructsVersion: '10.8.1',
  author: 'Gemeente Nijmegen',
  authorAddress: 'devops@nijmegen.nl',
  repository: 'https://github.com/GemeenteNijmegen/modules-aws-constructs.git',
  repositoryUrl: 'https://github.com/GemeenteNijmegen/modules-aws-constructs.git',
  projenrcTs: true,
  name: projectName,
  description: 'AWS CKD constructs for Gemeente Nijmegen',
  defaultReleaseBranch: 'main',
  packageName: projectName,
  depsUpgradeOptions: {
    workflowOptions: {
      branches: ['main'],
    },
  },
  deps: [
    '@gemeentenijmegen/projen-project-type',
  ],
});
project.synth();