const is = require('@sindresorhus/is');
const execa = require('execa');

module.exports.add = (files) => {
    const args = is.string(files) ? [files] : files;

    return execa('git', ['add', ...args]);
};

module.exports.amendCommit = () => execa('git', ['commit', '--amend', '--no-edit']);

module.exports.getFilesInLastCommit = async () => {
    const files = await execa.stdout('git', ['diff-tree', '--no-commit-id', '--name-only', '-r', 'HEAD']);

    return files.split('\n');
};

module.exports.getLastModifiedDate = async (file) => {
    const authorDateFormat = '%ad';
    const date = await execa.stdout('git', ['log', '--max-count=1', `--format="${authorDateFormat}"`, '--', file]);

    return new Date(date).toISOString();
};

module.exports.getStagedFiles = async () => {
    const files = await execa.stdout('git', ['diff', '--name-only', '--cached']);

    if (files) {
        files.split('\n');
    }

    return [];
};
