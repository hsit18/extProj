    module.exports = function (grunt) {
        // Project configuration. 
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
			dirs: {
				path: '../Agtract/trunk/www/css'
			},
			concat: {
				css: {
					src: [					
						'<%= dirs.path %>/custom/common.css', 
						'<%= dirs.path %>/custom/large-tab.css', 
						'<%= dirs.path %>/custom/small-tab.css', 
						'<%= dirs.path %>/custom/nexus7-2013.css', 
						'<%= dirs.path %>/custom/nexus7-2012.css'
					],
					dest: '<%= dirs.path %>/style.css'
				}
			},
			cssmin: {
				minify: {
                    expand: true,                    
                    src: [
                        '<%= dirs.path %>/style.css'
                    ],
                    dest: '',
                    ext: '.min.css'
                }
			},
			
			watch: {
				files: ['<%= dirs.path %>/custom/*'],
				tasks: ['concat', 'cssmin']
			}
        });
        
        // Load the plug-in
       

        grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
		
		grunt.registerTask('default', ['concat', 'cssmin']);
		//grunt.registerTask('watch', ['watch']);
    };