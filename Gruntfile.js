module.exports = function(grunt){

	grunt.initConfig({
		copy:{
			project:{
				expand: true,
				cwd: "src",
				src: '**/*',
				dest:"dist"
			}
		},
		clean:{
			dist:{
				src:"dist"
			}
		},
		compass: {
			compile: {
				options: {
					cssDir:'dist/public/css',
					sassDir: 'src/public/scss',
					imagesDir: 'src/public/img',
					outputStyle: 'compressed',
					relativeAssets: true,
					raw: 'preferred_syntax = :scss\n',
					force: true,
					time : true
				},
			},
		}
	});

	grunt.registerTask("default",["clean","copy","compass"]);
	//grunt.registerTask("dist",["clean","copy","compass"]);
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-compass");	
	// grunt.loadNpmTasks("grunt-contrib-concat");
	// grunt.loadNpmTasks("grunt-contrib-uglify");
	// grunt.loadNpmTasks("grunt-contrib-cssmin");
	// grunt.loadNpmTasks("grunt-usemin");
};