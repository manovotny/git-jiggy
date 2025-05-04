# git-jiggy

> A fresh collection of node git utilities.

[![logo](.github/logo.gif)](https://www.youtube.com/watch?v=3JcmQONgXJM)

## Installation

```
$ npm i git-jiggy
```

## Usage

```
const {getLastModifiedDate} = require('git-jiggy');

(async () => {
    const filePath = './path/to/some/file.txt';
    const date = await getLastModifiedDate(filePath);

    console.log(date);
    // $ 2018-09-02T18:58:18.000Z
})();
```

## API

All methods have a `Promise` interface.

### `add(files)`

Stages files for commit.

#### files

Type: `String` or `Array`

### `amendCommit()`

Amends commit with currently staged files, without editing the message.

### `getFilesInLastCommit()`

Gets the files in the last commit.

### `getLastModifiedDate(file)`

Gets the last modified date of the file passed in.

Returns `undefined` if the file does not exist in the repository.

#### file

Type: `String`

### `getStagedFiles()`

Gets the files that are currently staged.

## License

MIT © [Michael Novotny](https://manovotny.com)
