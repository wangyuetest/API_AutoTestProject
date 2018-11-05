# # # #-*-coding:utf-8-*-
# # # __author__ = "wangyue"
# # # import requests
# # # count = 9922001
# # # while (count < 9922101):
# # #     headers = {"Content-Type": "application/json;charset=UTF-8",
# # #                 "Authorization":"b0e95f84eaaa43c089d2dc1af8080101"
# # #                     }
# #     url = "http://192.168.20.223/rest/robot/robotSoftPhone"
# #     data = {
# #         "aliyunAccessId": "LTAIKVK0T3TUfDCM",
# #         "aliyunAccessSecret": "MP353DRDQNmAED9bcZTRbWDaNwHh3v",
# #         "asrAppKey": "nls-service-realtime-8k",
# #         "runAddress":"10.76.23.47",
# #         "sipDomain": "192.168.99.22:57365",
# #         "sipPassword": "ps123456",
# #         "sipUsername": count
# #     }
# #     count+=1
# #     results = requests.post(url, headers=headers, json=data)
# #     print(results.text)
# #     re = results.text
# #
# #
# # from multiprocessing import Process
# # import os
# #
# # # # 子进程要执行的代码
# # # def run_proc(name):
# # #     print('Run child process %s (%s)...' % (name, os.getpid()))
# # #
# # # if __name__=='__main__':
# # #     print('Parent process %s.' % os.getpid())
# # #     p = Process(target=run_proc, args=('test',))
# # #     print('Child process will start.')
# # #     p.start()
# # #     p.join()
# # #     print('Child process end.')
# # # import _thread
# # # import time
# # # def print_time(theadname,dalay):
# # #     count=0
# # #     while count<5:
# # #         time.sleep(dalay)
# # #         count+=1
# # #         print("%s: %s" % (theadname, time.ctime(time.time())))
# # #
# # #
# # # try:
# # #     _thread.start_new_thread(print_time, ("Thread-1", 2,))
# # #     _thread.start_new_thread(print_time, ("Thread-2", 4,))
# # # except:
# # #     print
# # #     "Error: unable to start thread"
# # #
# # # while 1:
# # #     pass
# #
# # from xml.parsers.expat import ParserCreate
# #
# # class DefaultSaxHandler(object):
# #     def start_element(self, name, attrs):
# #         print('sax:start_element: %s, attrs: %s' % (name, str(attrs)))
# #
# #     def end_element(self, name):
# #         print('sax:end_element: %s' % name)
# #
# #     def char_data(self, text):
# #         print('sax:char_data: %s' % text)
# #
# # xml = r'''<?xml version="1.0"?>
# # <ol>
# #     <li><a href="/python">Python</a></li>
# #     <li><a href="/ruby">Ruby</a></li>
# # </ol>
# # '''
# # handler = DefaultSaxHandler()
# # parser = ParserCreate()
# # # parser.returns_unicode = True
# # parser.StartElementHandler = handler.start_element
# # parser.EndElementHandler = handler.end_element
# # parser.CharacterDataHandler = handler.char_data
# # parser.Parse(xml)
# import hashlib
# md=hashlib.md5()
# md.update(('how to use md5 in python').encode('utf-8'))
# md.update('python hashlib?'.encode('utf-8'))
# print(md.hexdigest())
# import hmac
# msg=b'hello'
# key=b'secret'
# h=hmac.new(key,msg,digestmod='MD5')
# print(h.hexdigest())
#
# import hmac,random
# def hmac_md5(key,s):
#     return hmac.new(key.encode('utf-8'),s.encode('utf-8'),'MD5').hexdigest()
# class User(object):
#     def __init__(self,username,password):
#         self.username=username
#         self.key=''.join([chr(random.randint(48,122)) for i in range(20)])
#         self.password=hmac_md5(self.key,password)
# db={
#     'michael':User('michael', '123456'),
#     'bob': User('bob', 'abc999'),
#     'alice': User('alice', 'alice2008')
# }
# def login(username,password):
#     user=db[username]
#     return user.password==hmac_md5(user.key,password)
# assert login('michael', '123456')
# assert login('bob', 'abc999')
# assert login('alice', 'alice2008')
# assert not login('michael', '1234567')
# assert not login('bob', '123456')
# assert not login('alice', 'Alice2008')
# print('ok')
# import base64
# s='点发货单号'
# encodestr = base64.b64encode(s.encode('utf-8'))
# print(str(encodestr,'utf-8'))
#
#
# from urllib import request, parse
#
# print('Login to weibo.cn...')
# email = input('Email: ')
# passwd = input('Password: ')
# login_data = parse.urlencode([
#     ('username', email),
#     ('password', passwd),
#     ('entry', 'mweibo'),
#     ('client_id', ''),
#     ('savestate', '1'),
#     ('ec', ''),
#     ('pagerefer', 'https://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F')
# ])
#
# req = request.Request('https://passport.weibo.cn/sso/login')
# req.add_header('Origin', 'https://passport.weibo.cn')
# req.add_header('User-Agent', 'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
# req.add_header('Referer', 'https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F')
#
# with request.urlopen(req, data=login_data.encode('utf-8')) as f:
#     print('Status:', f.status, f.reason)
#     for k, v in f.getheaders():
#         print('%s: %s' % (k, v))
#     print('Data:', f.read().decode('utf-8'))
#
#
# import requests
# count = 4516
# num=0
# while (count < 4575):
#     num += 1
#     headers = {"Content-Type": "application/json;charset=UTF-8",
#               "Authorization":"b0e95f84eaaa43c089d2dc1af8080101"
#                     }
#     url = "http://192.168.20.223/rest/robot/robotSoftPhone"
#     data = {
#         "aliyunAccessId": "LTAIKVK0T3TUfDCM",
#         "aliyunAccessSecret": "MP353DRDQNmAED9bcZTRbWDaNwHh3v",
#         "asrAppKey": "nls-service-realtime-8k",
#         "runAddress":"10.76.23.47",
#         "sipDomain": "192.168.99.22:57365",
#         "sipPassword": "ps123456",
#         "sipUsername": count
#     }
#     count+=1
#
#     results = requests.post(url, headers=headers, json=data)
#     print(results.text)
#     re = results.text
# from PIL import Image,ImageFilter
# im=Image.open(r'C:\Users\ps\Pictures\Camera Roll\640.jpg')
# w,h=im.size
# print(('Original image size: %sx%s' % (w, h)))
# im.thumbnail((w//2,h//2))
# im2=im.filter(ImageFilter.BLUR)
# im.save('thumbnail.jpg', 'jpeg')
# im2.save('blur.jpg', 'jpeg')
# import psutil
# print(psutil.cpu_count())
# print (psutil.cpu_count(logical=False))
# print( psutil.cpu_times())
# print( psutil.virtual_memory())
# print( psutil.swap_memory())
# print( psutil.pids())
# import socket,threading,time
#
# s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
# # s.connect(('www.daihoubang.com', 80))
# # s.send(b'GET / HTTP/1.1\r\nHost: www.daihoubang.com\r\nConnection: close\r\n\r\n')
# # buffer = []
# # while True:
# #     d=s.recv(1024)
# #     if d:
# #         buffer.append(d)
# #     else:
# #        break
# # data=b''.join(buffer)
# #
# # header,html=data.split(b'\r\n\r\n',1)
# # print(header.decode('utf-8'))
# # with open('dhb.html','wb')as f:
# #     f.write(html)
# s.bind(('127.0.0.1',9999))
# s.listen(5)
# print('Waiting for connection.......')
#
# def tcplink(sock,addr):
#     print('Accept new connection from %s:%s...' % addr)
#     sock.send(b'Welcome!')
#     while True:
#         data = sock.recv(1024)
#         time.sleep(1)
#         if not data or data.decode('utf-8') == 'exit':
#             break
#         sock.send(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
#     sock.close()
#     print('Connection from %s:%s closed.' % addr)
# while True:
#     # 接受一个新连接:
#     sock, addr = s.accept()
#     # 创建新线程来处理TCP连接:
#     t = threading.Thread(target=tcplink, args=(sock, addr))
#     t.start()
# import socket
# s=socket.socket()
# host=b'127.0.0.1'
# port=9999
# s.bind((host,port))
# s.listen(5)
# print('Waiting for connection.......')
#
# while True:
#     c,addr=s.accept()
#     print('连接地址',addr)
#     c.send(b'hello python')
#     c.close()
def customer():
    r=''
    while True:
        n=yield r
        if not n:
            return
        print('[customer] Customer%s...'%n)
        r='200 OK '

def produce(c):
    c.send(None)
    n=0
    while n<5:
        n+=1
        print('[PRODUCER] Producing %s...' % n)
        r = c.send(n)
        print('[PRODUCER] Consumer return: %s' % r)
    c.close()
c=customer()
produce(c)