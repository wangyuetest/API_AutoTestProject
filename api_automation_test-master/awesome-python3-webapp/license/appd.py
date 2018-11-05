# coding:utf-8
import requests
import json
url='http://192.168.20.223:8080/rest/record/addVoice'
files= {'file': open(r'C:\Users\ps\Downloads\1540547574165403.wav', 'rb')}
header={"Content-Type":"multipart/form-data,boundary=----WebKitFormBoundary8USQCp45w7plKR8J",

    "Authorization":"b22318e38de64b21b3ff06467c18d795"
}
red=requests.post(url,headers=header,files=files)
jsondata=json.loads(red.text)
print(jsondata)
