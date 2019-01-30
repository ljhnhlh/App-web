[Chat ](https://socket.io/get-started/chat/)

[socket.io](https://socket.io/docs/rooms-and-namespaces/)



# 问题

1. 如何存储消息方的地址(或者说，在没有请求的情况下，服务器怎么知道该用户的IP，然后决定发送消息到哪里，就像你有A的消息，你知道A的账户，但你不知道他家的地址，你就无法向他传递消息了)

   ​	已解决，使用socket.id



通过使用唯一的id和`to`方法来达到将信息发送给某人的效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129223048336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)



# 用法

## 客户端

客户端使用socket.emit 往服务器发送消息，第一个参数用于标识通信的通道，第二个参数是消息内容，使用`socket.on`来获取服务端发送的消息，第一个参数用于标识通道，第二个参数是消息内容，

如下，‘chat message’是该通道的名称，后面的参数是对数据的发送，处理等

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190129225114918.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

## 服务端

![](https://img-blog.csdnimg.cn/2019012922571576.png)

## 对namespace的理解



服务端使用`of`建立namespace ，`on`使用连接，客户端直接使用该连接的标识进行通信即可

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019013007154060.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

## id

在生成socket时已经生成了对应的id，可使用id来标识用户，做到私密通信

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019013007231058.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

## 关闭socket

使用disconnection来关闭所有通道，用法与connection一致

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019013007255083.png)

## 从外部进程发送信息

socket.io-redis，socket.io-emitter

## socket.io-redis：

可以在多个进程上运行多个socket.io实例

https://github.com/socketio/socket.io-redis



## socket.io-emitter

用于非socket.io进程与socket.io进程通信



# 使用多个节点

将连接的压力分发给不同的进程/机器

若无法标识会话id，会导致HTTP 400 的响应

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130080941654.png)





## 保留字

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130083106567.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)



## 结构图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130083245489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)









# 测试

等下测试一下，`join`和`leave`是更换/设置标识符还是在标识符后面添加，or该socket可接收两个标识符的消息

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190130071950947.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2MzAzODYy,size_16,color_FFFFFF,t_70)

