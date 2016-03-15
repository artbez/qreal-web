module.exports = function (grunt) {

    // load the task
    grunt.loadNpmTasks("grunt-ts");

    // Configure grunt here
    grunt.initConfig({
        ts: {
            dev: {                          // a particular target
                src: ["Web/redactor/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                html: ["Web/redactor/**/*.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
				reference: "./Web/redactor/reference.ts",
				out: 'out.js',         // If specified, generate an out.js file which is the merged js file
                watch: 'Web'
            },
        }
    });

    grunt.registerTask("default", ["ts:dev"]);
};
