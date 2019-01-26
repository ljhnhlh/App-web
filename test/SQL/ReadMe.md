[TOC]



[MySQL官方文档](https://www.npmjs.com/package/mysql)



# 遇到的问题

每次请求，使用connection.connect()，请求完毕使用end(),会报错，后来改成一直开启连接，不知道会不会有什么危险。

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';` 这个语句貌似将密码强度减弱了（密码强度指校验强度？！）

# 需要思考的问题

1. 什么时候打开SQL，什么时候关闭，还是说运行服务器后要一直打开
2. SQL报错后会导致服务器终止，测试一下，使用 if(err) console.log(err) ,看看会不会终止
3. 如何设置权限更低的SQL用户
4. 如何使用查询得到的数据
5. 目前连接数据库的方法安全性较低，因为貌似关掉了数据的什么功能才能连上，要处理下，不然会有数据库安全(应该与问题3是类似的问题)



# 解决的问题

1. 

2. 使用console.log 不会终止，并且可通过以下字段可获知错误类型，方便判断是什么错误

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126001834235.png)

   (下图，前者为console(err)的输出，后者为只输出err.code,用此可以确定错误类型)

![](https://img-blog.csdnimg.cn/20190126001514617.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)



4. 通过使用[i].xxx，xxx为表的列属性，来引用某一行的某个属性，eg：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126001250838.png)



结果为：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126001142478.png)

# 验证数据是否在表内：

使用 `select 1 from tablename where col = 'col' limit 1;` 

如：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126191148456.png)



因为lj不在列表中，所以返回空集，空集是undefined，所以只要判断是否undefined即可知道是否存在

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126191228392.png)



# .format :规范化sql语句

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190126213836866.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

