import is from "@sindresorhus/is";
import { execa } from "execa";
import console from "console";

export const add = async (files) => {
  const args = is.string(files) ? [files] : files;

  return await execa({ preferLocal: true })`git add ${args.join(" ")}`;
};

export const amendCommit = async () =>
  await execa({ preferLocal: true })`git commit --amend --no-edit`;

export const getCurrentBranchName = async () => {
  const { stdout } = await execa`git rev-parse --abbrev-ref HEAD`;

  return stdout;
};

export const getFilesInLastCommit = async () => {
  const { stdout } =
    await execa`git diff-tree --no-commit-id --name-only -r HEAD`;

  return stdout.split("\n");
};

export const getLastModifiedDate = async (file) => {
  const { stdout } =
    await execa`git log --max-count=1 --format="%ad" -- ${file}`;

  try {
    return new Date(stdout).toISOString();
  } catch (e) {
    console.log(`Could not get date for: ${file} → ${e.message}`);

    return undefined;
  }
};

export const getStagedFiles = async () => {
  const { stdout } = await execa`git diff --name-only --cached`;

  if (stdout) {
    return stdout.split("\n");
  }

  return [];
};
