[Chat ](https://socket.io/get-started/chat/)

# 问题

1. 如何存储消息方的地址(或者说，在没有请求的情况下，服务器怎么知道该用户的IP，然后决定发送消息到哪里，就像你有A的消息，你知道A的账户，但你不知道他家的地址，你就无法向他传递消息了)
2. 



通过使用唯一的id和`to`方法来达到将信息发送给某人的效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129223048336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)



# 用法

## 客户端

客户端使用socket.emit 往服务器发送消息，第一个参数用于标识通信的通道，第二个参数是消息内容，使用`socket.on`来获取服务端发送的消息，第一个参数用于标识通道，第二个参数是消息内容，

如下，‘chat message’是该通道的名称，后面的参数是对数据的发送，处理等

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129225114918.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

## 服务端

![](https://img-blog.csdnimg.cn/2019012922571576.png)