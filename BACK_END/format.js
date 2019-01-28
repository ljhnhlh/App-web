//此处测试可以看出，只要使用 '?'和数组即可生成执行语句

var express = require('express');
var mysql = require('mysql');
var sql = 'insert into ? set ?';
var insert = ['user', { uid: null, uname: 'qweww', pwd: 123 }];
sql = mysql.format(sql, insert);
console.log(sql);

temp = 10;
sql = 'select ?,? from ? where ? = ?';
insert = ['uname', 'uid', 'user', 'uid', temp];
sql = mysql.format(sql, insert);
console.log(sql);