/*
 * grunt-wingdingify
 * https://github.com/jsbalrog/grunt-wingdingify
 *
 * Copyright (c) 2014 jsbalrog
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('wingdingify', 'A grunt plugin to wingdingify your javascript source code', function () {

    var wingdings = grunt.file.readJSON(this.options().src);

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      var srcReturnless = src.replace(/(\r\n|\n|\r)/gm, '');
      var srcSpaceless = srcReturnless.replace(/\s+/g, '');

      var srcArray = srcSpaceless.toLowerCase().slice();
      var destArray = [];
      var dest = '';
      for(var j = 0; j < srcArray.length; j++) {
        if(wingdings[srcArray[j]] !== undefined) {
          destArray.push(wingdings[srcArray[j]]);
        } else {
          destArray.push(srcArray[j]);
        }
      }

      dest = destArray.join('');
      // Handle options.
      dest += options.punctuation;

      // Write the destination file.
      grunt.file.write(file.dest, dest.replace(/\s+/g, ''));

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
