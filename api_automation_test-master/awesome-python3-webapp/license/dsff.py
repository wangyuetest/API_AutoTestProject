# -*- coding: utf-8 -*-
import pandas as pd
import requests
import json
import os
import logging;logging.basicConfig(level=logging.INFO)
import asyncio,json,time
from datetime import datetime
from aiohttp import web
# upload_dir=r'D:\works\api_automation_test-master\awesome-python3-webapp\upload'
# lists=os.listdir(upload_dir)
# ##申明匿名函数 获取最新访问的文件
# lists.sort(key=lambda fn:os.path.getatime(upload_dir+'\\'+fn) )
# print(lists[-1])
# #获取最新的文件
# file=os.path.join(upload_dir,lists[-1])
def read_excel(file_path):
        file_df= pd.read_excel(file_path,names=['name','idcard','phone'])
        user_list = []
        for idx, each_row in file_df.iterrows():
            _name = each_row["name"]
            _idcard = each_row["idcard"]
            _phone = each_row["phone"]
            url = 'http://10.76.11.20:82/api/services/cornucopia/rpt_ctc?name=%s&idcard=%s&phone=%s&auth_org=hulushuju' \
                  % (_name, _idcard, _phone)
            res = requests.get(url)
            data = json.loads(res.text)
            result = data.get("result", [])
            print (idx, _name, _idcard, _phone)
            if result:
                ctc_lts = result[0].get("contact_list", [])
                print (ctc_lts)
                if ctc_lts:
                    for i in range(len(ctc_lts)):
                        ctc_lts[i]["uname"] = _name
                        ctc_lts[i]["idcard"] = _idcard
                        ctc_lts[i]["phoneNum"] = _phone
                        # phlist = _phone[4:5]
                        # _newphone = _phone.replace(list, '**')
                        # print (_newphone)
                user_list.extend(ctc_lts)
                opt_df = pd.DataFrame(user_list)
                opt_df.to_excel(r"D:\works\api_automation_test-master\awesome-python3-webapp\upload\dataB.xlsx", encoding="utf-8", index=False)
        print ('保存表格成功')
@asyncio.coroutine
def init(loop):
    app=web.Application(loop=loop)
    app.router.add_route('GET','/',read_excel)
    srv=yield from loop.create_server(app.make_handler(), '127.0.0.1', 9000)
    logging.info('server started at http://127.0.0.1:9000...')
    return srv
loop=asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()

if __name__ == "__main__":
    # main_run()
    read_excel(file_path=r'D:\works\api_automation_test-master\awesome-python3-webapp\upload\1531148898feidai1.xlsx')
    # mailto_list = ["wangyue@daihoubang.com", "975405349@qq.com"]
    # mail_title = 'Hey subject'
    # mail_content = 'Hey this is content'
    # mm = Mailer(mailto_list, mail_title, mail_content)
    # res = mm.sendMail()
    # print (res)
