此例子是为了测试cookie的使用，主要是在`cookie.js`（后端）对cookie进行添加或删除，使用了`cookie-parser` 用法：

```
var cookieParser = require('cookie-parser')
app.use(cookieParser())
```

使用`req.cookies` 可获得请求中的cookie，根据属性可用`req.cookies.name`获取

设置和清除cookie：

```
//设置cookie
res.cookie('name', 'can', { maxAge: 900000, httpOnly: true });
//清除cookie
 res.clearCookie('name');
```

## 运行现象：

首先打开cookie_logout.html,此时没有cookie，所以会要求先登陆，说明cookie判断成功了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003027437.png)

接下来打开根路径 ’/‘

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003222181.png)

登陆后跳转到cookie_logout.html,此时新开窗口，打开`http://127.0.0.1:8080/test/cookie/cookie_logout.html` ，也会加入logout.html，说明每次请求浏览器都带上cookie了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003356296.png)



![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003318712.png)

点击logout，删除cookie

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003602548.png)

删除成功，再次访问 `http://127.0.0.1:8080/test/cookie/cookie_logout.html`时显示如下，说明cookie已删除

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190125003027437.png)

## 接下来需要思考的问题/想法

1. 既然cookie会失效，那就不用存在数据库中了，存在运行内存即可
2. 需要使用cookie和用户的键值对，即每次判断请求时，取出cookie，使用jianzdui['cookie']获得用户，用于数据库的查询条件
3. 需要解决后端存储哈希还是明文，如何加密？