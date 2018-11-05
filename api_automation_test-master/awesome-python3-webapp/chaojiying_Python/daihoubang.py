#coding=utf-8
from selenium import webdriver
from time import  sleep
from getcode import *
from chaojiying import *
import json


class login():
     def user_login(self,driver,username,password,Resultcode):
            # driver.get("https://i.daihoubang.com/#/login")

            tup=();
            tup=driver.find_elements_by_tag_name("input");
            tup[0].send_keys(username)
            sleep(2)
            tup[1].send_keys(password)
            sleep(2)
            tup[2].send_keys(Resultcode)
            sleep(2)
            driver.find_element_by_css_selector("#loginBtn").click()
            sleep(2)
if __name__ == '__main__':
            driver=webdriver.Chrome()
            driver.get("https://i.daihoubang.com/#/login")

            screenpicture().screenpic(driver)
            chaojiying = Chaojiying_Client('wangyue', 'wangyue', '96001')
            im = open(r"C:\Python27\Scripts\a.png", 'rb').read()

            codejson=chaojiying.PostPic(im,1902)
            code1=codejson['pic_str']

            tup=();
            tup=driver.find_elements_by_tag_name("input");
            tup[0].send_keys("13611000028")
            sleep(2)
            tup[1].send_keys("test123")
            sleep(2)
            tup[2].send_keys(code1)
            sleep(2)
            driver.find_element_by_css_selector("#loginBtn").click()
            sleep(2)

