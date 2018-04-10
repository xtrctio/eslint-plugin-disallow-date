# eslint-plugin-disallow-date

[![Build Status](https://travis-ci.org/github/miovision.svg?branch=master)](https://travis-ci.org/github/miovision)

>   An ESLint plugin to disallow usage of JavaScript Date objects.

## Installation

1.  Install [ESLint](http://eslint.org):

    ```
    $ npm i -D eslint
    ```

2.  Install `@miovision/eslint-plugin-disallow-date`:

    ```
    $ npm i -D @miovision/eslint-plugin-disallow-date
    ```

**Note:**
If you installed ESLint globally (using the `-g` flag) then you must also
install `eslint-plugin-disallow-date` globally.

## Usage

Add `disallow-date` to the plugins section of your `.eslintrc` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "disallow-date"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "disallow-date/no-new-date": 2,
        "disallow-date/no-static-date": 2,
        "disallow-date/no-to-date": 2,
    }
}
```

## Supported Rules

|   | Rule ID                      | Description                                      |
|---|------------------------------|--------------------------------------------------|
|   | disallow-date/no-new-date    | disallow `new Date()` usage                      |
|   | disallow-date/no-static-date | disallow `Date.now()` and other static functions |
|   | disallow-date/no-to-date     | disallow `moment().toDate()` functions           |

## License

The content of this project under the [MIT license](http://opensource.org/licenses/mit-license.php).
