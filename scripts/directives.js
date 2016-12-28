angular.module('Directives',[])

.directive('loading',function(){
	return {
		restrict:'A',
		replace:true,
		template:'<img src="">'
	}
})