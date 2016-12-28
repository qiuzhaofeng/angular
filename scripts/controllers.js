angular.module('controllers',[])

// .controller('DemoController',['$scope',function($scope){
// 	console.log('启动测试的控制器');
	
// }]) 

.controller('NavController',['$scope',function($scope){
	console.log('侧边栏公共样式');
	$scope.navs=[
		{link:'#/today',text:'今日一刻',icon:'icon-home'},
		{link:'#/older',text:'往期内容',icon:'icon-file-empty'}
	]
	
}]) 

/*
向后台拿数据,如果前后端不分离，就没有跨域这么一说，如果有前后端分离，最后也得联调，而我在工作中能不用就
不用，面试的时候都是问jsonp的原理，script标签的src属性可以跨域，将src属性设置成拼参数的形式，把当前页面的
函数名拼到地址上，然后到地址的页面输出函数名加()到当前页面,并且将这个页面的数据一起放到括号中传过来，这时，
页面中正好有这个函数，直接调用，并且形参就是穿过来的数据了，我们就可以对这个形参进行设置了，但是如果后台
不支持jsonp呢，而且在工作中如果用jsonp，联调的时候就不存在跨域了，还得改过来，所以工作中尽量不用jsonp，
所以还有其他方式，
方式1：先请求本地的服务器到后台的php，利用file_get_content()函数可以读取跨域的文件，其实就是再通过服务器
去请求另一个服务器，利用这个特性可以拿到数据 ，
方式2：通过浏览器的插件CORS Toggle，一个浏览器跨域的插件，不需要考虑联调的问题了，超好用，
但是我们这里是偷得数据，时间不对，我们要通过php操作改成实际的时间，所以这里不用插件，单工作中可以用
*/

// 方式1
.controller('TodayController',['$scope','$http','$filter','$rootScope',function ($scope,$http,$filter,$rootScope){
	console.log('启动了1');

	$rootScope.title='今日一刻';
	$rootScope.index=0;
	$rootScope.loaded=false;
	var today=$filter('date')(new Date, 'yyyy-MM-dd');

	$http({
		url:'./api/today.php',
		method:'get',
		params:{today: today}		
	}).success(function(info){
		console.log(info);
		$rootScope.loaded=true;
		$scope.date=info.date;
		$scope.posts=info.posts;
	})
	
}]) 
// 方式2
// .controller('TodayController',['$scope','$http',function ($scope,$http){
// 	console.log('启动了1');
// 	$http({
// 		url:'https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6'	
// 	}).success(function(info){
// 		console.log(info);
// 	})
	
// }]) 

.controller('OlderController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope){
	console.log('启动了2');

	$rootScope.title='往期内容';
	$rootScope.index=1;
	$rootScope.loaded=false;
	$http({
		url:'./api/older.php',
		method:'get',		
	}).success(function(info){
		console.log(info);
		$rootScope.loaded=true;
		$scope.date=info.date;
		$scope.posts=info.posts;
	})
}]) 