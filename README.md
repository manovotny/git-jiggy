# git-jiggy

> A node git utility to get information about a repository

[![logo](.github/logo.gif)](https://www.youtube.com/watch?v=3JcmQONgXJM)

## Installation

### NPM

```
$ npm i git-jiggy
```

### Yarn

```
$ yarn add git-jiggy
```

## API

### `add(paths)`

### `amendCommit()`

```
const {amendCommit} = require('git-jiggy');

(async () => {
    const date = await getLastModifiedDate(filePath);

    console.log(date);
    // $ 2018-09-02T18:58:18.000Z
})();
```

### `getFilesInLastCommit()`

### `getLastModifiedDate(path)`

Get the last modified date of the file path passed in.

```
const {getLastModifiedDate} = require('git-jiggy');

(async () => {
    const filePath = './path/to/some/file.txt';
    const date = await getLastModifiedDate(filePath);

    console.log(date);
    // $ 2018-09-02T18:58:18.000Z
})();
```

### `getStagedFiles()`

## License

MIT © [Michael Novotny](https://manovotny.com)
