<?php

//前端来处理前天的时间比较麻烦
//利用后端php获得时间，
//echo time();//php的系统函数，可以获得当前服务器的时间
//js是在浏览器端运行，获取的是客户端的时间，
//但是我的服务器也在自己的电脑，所以时间是一致的
//输入Yike/api/older.php获取一个时间戳（从1970年到现在过了多少秒）

//echo date('Y-m-d',time());//php天生就有，而js是自己封装的过滤器
//echo '<br>';

// echo strtotime('-1day',time());//php获得前面的时间
$older=strtotime('-1day',time());//前一天的时间戳
$older=date('Y-m-d',$older);

//exit;

$url = 'https://moment.douban.com/api/stream/date/'.$older.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

$result=file_get_contents($url);
//读取https的时候需要对php配置设置，原因如上

echo $result;