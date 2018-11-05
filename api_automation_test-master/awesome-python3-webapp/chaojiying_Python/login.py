from daihoubang_login import *
from getcode import *
from daihoubang_login import  *
from getcode import *
from chaojiying import *
import json

driver=webdriver.Chrome()
driver.get("https://i.daihoubang.com/#/login")

screenpicture().screenpic(driver)
chaojiying = Chaojiying_Client('wangyue', 'wangyue', '96001')
im = open(r"C:\Python27\Scripts\a.png", 'rb').read()
codejson=chaojiying.PostPic(im,1902)
code1=codejson['pic_str']



login().user_login(driver,'13611000028','test123',code1)