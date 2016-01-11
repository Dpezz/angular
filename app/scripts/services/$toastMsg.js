angular
    .module('app')
    .service('$toastMsg', $toastMsg)

    function $toastMsg($state, $mdToast) {
    	this.action = function(message){
    		var msg = (message)?'Error':'Exitosamente';
	    	var toast = $mdToast.simple()
                .textContent('Finalizado: ' + msg + '!')
                .action('OK')
                .highlightAction(true)
                .position('bottom left')
                .hideDelay(5000);
            $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                    $state.reload();
                }
            });
        }

        this.simple = function(message){
        	var msg = (message)?'Error':'Exitosamente';
	    	$mdToast.show(
		      	$mdToast.simple()
			        .textContent('Finalizado: ' + msg + '!')
			        .position('bottom left')
			        .hideDelay(5000)
		    );
        }
    }