# import asyncio
# @asyncio.coroutine
# def hello():
#     print("Hello world!")
#     r=yield from asyncio.sleep(1)
#     print("Hello again")
# loop=asyncio.get_event_loop()
# loop.run_until_complete(hello())
# loop.close()


# import threading
# import asyncio
#
# @asyncio.coroutine
# def hello():
#     print('hello world(%s)'%threading.current_thread())
#     yield from asyncio.sleep(1)
#     print('hello again(%s)'%threading.current_thread())
# loop=asyncio.get_event_loop()
# tasks=[hello(),hello()]
# loop.run_until_complete(asyncio.wait(tasks))
# loop.close()

# import asyncio
# async def wget(host):
#         print('wget %s...' % host)
#         connect = asyncio.open_connection(host, 80)
#         reader, writer = await connect
#         header = 'GET / HTTP/1.0\r\nHost: %s\r\n\r\n' % host
#         writer.write(header.encode('utf-8'))
#         await writer.drain()
#         while True:
#             line = await reader.readline()
#             if line == b'\r\n':
#                 break
#             print('%s header > %s' % (host, line.decode('utf-8').rstrip()))
#         # Ignore the body, close the socket
#         writer.close()
#
# loop = asyncio.get_event_loop()
# tasks = [wget(host) for host in ['www.sina.com.cn', 'www.sohu.com', 'www.163.com']]
# loop.run_until_complete(asyncio.wait(tasks))
# loop.close()

# import asyncio
#
# from aiohttp import web
#
# async def index(request):
#     await asyncio.sleep(0.5)
#     return web.Response(body=b'<h1>Index</h1>')
#
# async def hello(request):
#     await asyncio.sleep(0.5)
#     text = '<h1>hello, %s!</h1>' % request.match_info['name']
#     return web.Response(body=text.encode('utf-8'))
#
# async def init(loop):
#     app = web.Application(loop=loop)
#     app.router.add_route('GET', '/', index)
#     app.router.add_route('GET', '/hello/{name}', hello)
#     srv = await loop.create_server(app.make_handler(), '127.0.0.1', 8000)
#     print('Server started at http://127.0.0.1:8000...')
#     return srv
#
# loop = asyncio.get_event_loop()
# loop.run_until_complete(init(loop))
# loop.run_forever()
# from enum import Enum,unique
#
# Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
# for name, member in Month.__members__.items():
#     print(name,'--',member,member.value)
# @unique
# class Weekday(Enum):
#     Sun = 0  # Sun的value被设定为0
#     Mon = 1
#     Tue = 2
#     Wed = 3
#     Thu = 4
#     Fri = 5
#     Sat = 6
# day1 = Weekday.Mon
# print(day1)
# print(Weekday.Tue)
# Weekday.Tue
#
#
# class Gender(Enum):
#     Male=0
#     Female=1
# class Student(object):
#     def __init__(self,name,gender):
#         self.name=name
#         self.gender=gender
# # -*- coding: utf-8 -*-
# from enum import Enum, unique
#
# class Gender(Enum):
#     Male = 0
#     Female = 1
#
# class Student(object):
#     def __init__(self, name, gender):
#         self.name = name
#         self.gender = gender
#
# # 测试:
# bart = Student('Bart', Gender.Male)
# if bart.gender == Gender.Male:
#     print(bart.gender)
#     print('测试通过!')
# else:
#     print('测试失败!')
# class Student(object):
#     def __init__(self, name, score):
#         self.name = name
#         self.score = score
#
#     def get_grade(self):
#         if self.score>100:
#             raise ValueError
#         elif self.score >= 80:
#             return 'A'
#         elif self.score >= 60:
#             return 'B'
#         elif self.score >= 0:
#             return 'C'
#         # 分数小于0的抛出ValueError
#         else:
#             raise ValueError
#
# import unittest
# class TestStudent(unittest.TestCase):
#     def setUp(self):
#         # 每个测试用例执行之前做操作
#         print('测试开始！！！')
#     def test_80_to_100(self):
#         s1 = Student('Bart', 80)
#         s2 = Student('Lisa', 100)
#         self.assertEqual(s1.get_grade(), 'A')
#         self.assertEqual(s2.get_grade(), 'A')
#
#     def test_60_to_80(self):
#         s1 = Student('Bart', 60)
#         s2 = Student('Lisa', 79)
#         self.assertEqual(s1.get_grade(), 'B')
#         self.assertEqual(s2.get_grade(), 'B')
#
#     def test_0_to_60(self):
#         s1 = Student('Bart', 0)
#         s2 = Student('Lisa', 59)
#         self.assertEqual(s1.get_grade(), 'C')
#         self.assertEqual(s2.get_grade(), 'C')
#
#     def test_invalid(self):
#         s1 = Student('Bart', -1)
#         s2 = Student('Lisa', 101)
#         with self.assertRaises(ValueError):
#             s1.get_grade()
#         with self.assertRaises(ValueError):
#             s2.get_grade()
#
# if __name__ == '__main__':
#     unittest.main()
# coding=utf-8
'''
random.randint(a, b):用于生成一个指定范围内的整数。
其中参数a是下限，参数b是上限，生成的随机数n: a <= n <= b
random.choice(sequence)：从序列中获取一个随机元素
参数sequence表示一个有序类型（列表，元组，字符串）
'''
# import requests
# from time import ctime
# import threading
#
#
# # from random import randint,choice
#
#
# # 创建请求函数
# def getRequest():
#     # 定义一些文件头
#     header = {"Content-Type":"application/json"}
#     data={
#         "username":"18757805645",
#         "password":"ps123456",
#         "captcha":"ANYCASH!@#2017",
#         "token":"i18+lCQWQszHuJ0x/qZ0tA=="
#         }
#     # 请求服务,例如：www.baidu.com
#     hostServer = ""
#     # 接口
#     requrl = "http://192.168.1.59:8080/rest/admin/login/signIn"
#     # 连接服务器
#     conn =requests.post(url=requrl,json=data,headers=header)
#     # 发送请求
#     print(conn.text)
#     # 获取请求响应
#     response =conn.status_code
#     # 打印请求状态
#     if response in range(200, 300):
#
#         pass
#
#
# # 创建数组存放线程
# threads = []
# # 创建100个线程
# for i in range(10):
#     # 针对函数创建线程
#     t = threading.Thread(target=getRequest, args=())
#     # 把创建的线程加入线程组
#     threads.append(t)
#
# if __name__ == '__main__':
#     # 启动线程
#     for i in threads:
#         i.start()
#         # keep thread
#     for i in threads:
#         i.join()
#         print(threading.current_thread())
#         print(threading.active_count())

# class Myclass:
#     i=123456
#     def f(self):
#         return 'hello'
# # x=Myclass()
# print("MyClass 类的属性 i 为：", Myclass().i)
# print("MyClass 类的方法 f 输出为：", Myclass().f())

import threading
import time
exitflag=0
class myThead(threading.Thread):
    def __init__(self,theadID,name,counter):
         threading.Thread.__init__(self)
         self.theadID=theadID
         self.name=name
         self.counter=counter
    def run(self):
        print("开始线程："+self.name)
        print_time(self.name,self.counter,5)
        print("退出线程"+self.name)
def print_time(threadname,delay,counter):
    while counter:
        if exitflag:
            threadname.exit()
        time.sleep(delay)
        print("%s:%s"%(threadname,time.ctime(time.time())))
        counter -=1
 #创建新线程
thread1=myThead(1,"thead1",1)
thread2=myThead(2,"thead2",2)

#开启新线程
thread1.start()
thread2.start()
thread1.join()
thread2.join()
print("退出主线程")
