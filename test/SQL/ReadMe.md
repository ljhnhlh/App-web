

[MySQL官方文档](https://www.npmjs.com/package/mysql)



# 遇到的问题

每次请求，使用connection.connect()，请求完毕使用end(),会报错，后来改成一直开启连接，不知道会不会有什么危险。



# 需要思考的问题

1. 什么时候打开SQL，什么时候关闭，还是说运行服务器后要一直打开
2. SQL报错后会导致服务器终止，测试一下，使用 if(err) console.log(err) ,看看会不会终止
3. 如何设置权限更低的SQL用户
4. 如何使用查询得到的数据