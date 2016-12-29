<?php

$today=$_GET['today'];

//地址是https的，有一个ssl安全层，当读取https时，需要对php配置设置一下，
// phpinfo();
// exit();
// 找到php.ini文件的第970行，把;号去掉，因为php中;号代表注释，去掉之后就是openssl了，就可以读取https协议了
$url = 'https://moment.douban.com/api/stream/date/'.$today.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

$result=file_get_contents($url);
//读取https的时候需要对php配置设置，原因如上

echo $result;
