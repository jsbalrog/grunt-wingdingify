# grunt-wingdingify

Minifiying's good, uglifying's better, wingdingifying's all kinds of awesome!!
This is a plugin to obfuscate your source code so bad that the compiler doesn't
even recognize it.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wingdingify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wingdingify');
```

## The "wingdingify" task

### Overview
In your project's Gruntfile, add a section named `wingdingify` to the data object passed into `grunt.initConfig()`. `src` must point to `node_modules/grunt-wingdingify/wingdings.json`.

```js
wingdingify: {
	options: {
		src: 'node_modules/grunt-wingdingify/wingdings.json'
	},
  default_options: {
    options: {
    },
    files: {
      'tmp/wd.js': ['app.js']
    }
  }
}
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  wingdingify: {
    options: {
      src: 'node_modules/grunt-wingdingify/wingdings.json'
    },
    default_options: {
    options: {
    },
    files: {
      'tmp/wd.js': ['app.js']
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 jsbalrog. Licensed under the MIT license.
