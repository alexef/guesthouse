module.exports = function(grunt) {
	grunt.initConfig({
		handlebars: {
			all: {
				options: {
					namespace: "Templates"
				},
				files: {
					"build/templates.js": ["templates/**/*.hbs"]
				}
			}
		},
		watch: {
			templates: {
				files: ['templates/**/*.hbs'],
				tasks: ['handlebars']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('default', [
		'handlebars',
		'watch'
	]);
};
