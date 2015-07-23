module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-html2js');

    grunt.initConfig({

        html2js: {
            options: {

        },

        main: {
            src: ['tmpl\\*.html'],
            dest: 'tmpl.js',
            module: 'templates'
        }
    },


    uglify: {
        my_target: {
            files: {
                'mtmpl.js': ['tmpl.js']
            }
        }
    },

    compress: {
        main: {
            options: {
                mode: 'gzip'
            },
            files: [
            // Each of the files in the src/ folder will be output to
            // the dist/ folder each with the extension .gz.js
      {expand: true, src: ['tmpl.js'], dest: 's', ext: '.gz.js' }
    ]
        }
    }


});
grunt.loadNpmTasks('grunt-html2js');
grunt.loadNpmTasks('grunt-html-convert');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-compress');

grunt.registerTask('default', 'Log some stuff.', function () {
    grunt.log.write('Logging some stuff...').ok();
});

grunt.registerTask('default', ['html2js', 'uglify', 'compress']);

};