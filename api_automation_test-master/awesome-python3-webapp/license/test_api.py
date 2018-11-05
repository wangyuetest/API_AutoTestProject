import requests
import json
import urllib.request
from chaojiying_Python.chaojiying import *
geturl="http://192.168.20.223:8080/rest/login/captcha"
respone=requests.get(geturl)
reps=requests.request('get',geturl)
print(reps.text)
import sys,os
print(__file__)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(BASE_DIR)
sys.path.append(BASE_DIR)
from license.chaojiying import *
print(respone.text)
json_data=json.loads(respone.text)
json_data1=json_data.get("data")["captcha"]
print(json_data1)
imgurl="data:image/jpeg;base64,"+json_data1
req=urllib.request.urlopen(imgurl)
ww=req.read()
file=open('4.png','wb')
file.write(ww)

if __name__ == '__main__':
    chaojiying = Chaojiying_Client('wangyue', 'wangyue', '96001')
    im = open(r"D:\works\api_automation_test-master\awesome-python3-webapp\license\4.png", 'rb').read()
    print(chaojiying.PostPic(im, 1902))
    codejson = chaojiying.PostPic(im, 1902)
    code1 = codejson['pic_str']
    print(code1)

# if __name__ == '__main__':

# import urllib.request
#
# file=urllib.request.urlopen('http://www.baidu.com')
#
# data=file.read()    #读取全部
#
# dataline=file.readline()    #读取一行内容
#
# fhandle=open("./1.html","wb")    #将爬取的网页保存在本地
# fhandle.write(data)
# fhandle.close()