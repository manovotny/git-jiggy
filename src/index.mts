import { execa } from "execa";

export const add = async (files: string | string[]): Promise<void> => {
  const args = Array.isArray(files) ? files : [files];

  await execa({ preferLocal: true })`git add ${args.join(" ")}`;
};

export const amendCommit = async (): Promise<void> => {
  await execa({ preferLocal: true })`git commit --amend --no-edit`;
};

export const getCurrentBranchName = async (): Promise<string> => {
  const { stdout } = await execa`git rev-parse --abbrev-ref HEAD`;

  return stdout;
};

export const getFilesInLastCommit = async (): Promise<string[]> => {
  const { stdout } =
    await execa`git diff-tree --no-commit-id --name-only -r HEAD`;

  return stdout.split("\n");
};

export const getLastModifiedDate = async (
  file: string,
): Promise<string | undefined> => {
  const { stdout } =
    await execa`git log --max-count=1 --format="%ad" -- ${file}`;

  try {
    return new Date(stdout).toISOString();
  } catch (error: unknown) {
    console.log(
      `Could not get date for: ${file} → ${error instanceof Error ? error.message : error}`,
    );

    return undefined;
  }
};

export const getStagedFiles = async (): Promise<string[]> => {
  const { stdout } = await execa`git diff --name-only --cached`;

  if (stdout) {
    return stdout.split("\n");
  }

  return [];
};
