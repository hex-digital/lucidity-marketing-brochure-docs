import { type NodePlopAPI } from 'node-plop';
import * as path from 'node:path';
import { applyFileOperations } from './actions/fileOperations';
import { pnpmInstall } from './actions/pnpmInstall';
import * as helpers from './helpers';

export default function generator(plop: NodePlopAPI): void {
  const templatesRoot = path.resolve(process.cwd(), 'turbo', 'templates', 'package');

  /** Make our custom helpers available for use in templates as handlebars helpers */
  helpers.init(plop);

  plop.setActionType('fileOps', applyFileOperations);
  plop.setActionType('pnpmInstall', pnpmInstall);

  plop.setGenerator('package', {
    description: 'Create a new package',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Package name with dashes. E.g. "my-package": ',
        validate: helpers.validateNonEmptyString('name'),
      },
    ],
    actions: (answers) => {
      if (!answers) return [];

      return [
        {
          type: 'addMany',
          destination: path.resolve(process.cwd(), 'packages', answers.name),
          templateFiles: path.join(templatesRoot, '**/*'),
          base: templatesRoot,
          abortOnFail: true,
          force: false,
          verbose: true,
          skipIfExists: false,
        },
        {
          type: 'fileOps',
          operations: [
            {
              type: 'rename',
              from: path.join('packages', answers.name, 'ls.config.cjs'),
              to: path.join('packages', answers.name, 'lint-staged.config.cjs'),
            },
          ],
        },
        {
          type: 'pnpmInstall',
        },
      ];
    },
  });
}
