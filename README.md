# eslint-plugin-disallow-date

>   An ESLint plugin to disallow usage of JavaScript Date objects.

## Installation

1.  Install [ESLint](http://eslint.org):

    ```
    $ npm i -D eslint
    ```

2.  Install `@xtrctio/eslint-plugin-disallow-date`:

    ```
    $ npm i -D @xtrctio/eslint-plugin-disallow-date
    ```

**Note:**
If you installed ESLint globally (using the `-g` flag) then you must also
install `@xtrctio/eslint-plugin-disallow-date` globally.

## Usage

Add `@xtrctio/disallow-date` to the plugins section of your `.eslintrc`
configuration file. You can omit the `eslint-plugin-` prefix, but must include
the `@xtrctio` package scope:

```json
{
    "plugins": [
        "@xtrctio/disallow-date"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@miovision/disallow-date/no-new-date": 2,
        "@miovision/disallow-date/no-static-date": 2,
        "@miovision/disallow-date/no-to-date": 2,
    }
}
```

Run the linter with `npx eslint --ext=js .`

## Supported Rules

|   | Rule ID                      | Description                                      |
|---|------------------------------|--------------------------------------------------|
|   | disallow-date/no-new-date    | disallow `new Date()` usage                      |
|   | disallow-date/no-static-date | disallow `Date.now()` and other static functions |
|   | disallow-date/no-to-date     | disallow `moment().toDate()` functions           |

## License

The content of this project under the [MIT license](http://opensource.org/licenses/mit-license.php).
