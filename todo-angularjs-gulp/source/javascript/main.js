require.config({
	shim: {
		'bootstrap': {
			'deps': [
				'jquery'
			]
		}
	},
	paths: {
		assets: 'assets'
	}
});

require([
 
], function() {
    console.log('loaded succesfully');
});

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "500",
    "hideDuration": "500",
    "timeOut": "5000",
    "extendedTimeOut": "10000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "slideDown",
    "hideMethod": "slideUp"
};