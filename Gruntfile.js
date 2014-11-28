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
		},
		neuter: {
   		application: {
		 	options: {
      		includeSourceMap: true
        },
				dest: 'build/guesthouse.js',
        src: 'js/app.js'
			}
		}
	});
	grunt.registerTask('default', [
		'handlebars',
		'neuter',
		'watch'
	]);
	grunt.loadNpmTasks('grunt-neuter');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('default', [
		'handlebars',
		'watch'
	]);
};
