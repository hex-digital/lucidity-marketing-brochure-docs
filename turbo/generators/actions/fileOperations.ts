import { existsSync, renameSync } from 'node:fs';
import * as path from 'node:path';
import { CustomActionConfig } from 'node-plop';

type RenameFileOperation = {
  type: 'rename';
  from: string;
  to: string;
  skipIfMissing?: boolean;
};

type FileOperation = RenameFileOperation;

type FileOpsActionConfig = {
  cwd?: string;
  operations: FileOperation[];
};

function resolvePath(baseDir: string, inputPath: string) {
  if (path.isAbsolute(inputPath)) {
    return inputPath;
  }

  return path.resolve(baseDir, inputPath);
}

function applyRenameOperation(baseDir: string, operation: RenameFileOperation) {
  const fromPath = resolvePath(baseDir, operation.from);
  const toPath = resolvePath(baseDir, operation.to);

  if (!existsSync(fromPath)) {
    if (operation.skipIfMissing ?? true) {
      return `Skipped rename (missing): ${fromPath}`;
    }

    throw new Error(`Cannot rename missing file: ${fromPath}`);
  }

  renameSync(fromPath, toPath);
  return `Renamed ${fromPath} to ${toPath}`;
}

export function applyFileOperations(_answers: unknown, config: CustomActionConfig<string>) {
  const fileOpsConfig = config as Partial<FileOpsActionConfig>;

  if (!fileOpsConfig.operations?.length) {
    return 'No file operations fileOpsConfigured';
  }

  const baseDir = fileOpsConfig.cwd ? path.resolve(fileOpsConfig.cwd) : process.cwd();
  const results: string[] = [];

  for (const operation of fileOpsConfig.operations) {
    if (operation.type === 'rename') {
      results.push(applyRenameOperation(baseDir, operation));
    }
  }

  return results.join('\n');
}
