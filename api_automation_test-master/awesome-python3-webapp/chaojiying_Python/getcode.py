from selenium import webdriver
from PIL import Image
from  time import sleep
class screenpicture():

     def screenpic(self,driver):

        driver.get_screenshot_as_file(r"C:\Python27\Scripts\a.png")

        location =driver.find_elements_by_tag_name('img')[2].location
        size = driver.find_elements_by_tag_name('img')[2].size
        left = location['x']
        top =  location['y']
        right = location['x'] + size['width']
        bottom = location['y'] + size['height']
        a = Image.open(r"C:\Python27\Scripts\a.png")
        im = a.crop((left,top,right,bottom))
        im.save(r"C:\Python27\Scripts\a.png")


