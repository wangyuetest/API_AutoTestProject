__author__ = "wangyue"
import requests
import pymysql
db_host="192.168.1.122"
# db_port=3306
db_user="admin"
db_password="UAT#2017admin"
db_data="robot"
# import json
# db=pymysql.connect(host=db_host,user=db_user,passwd=db_password,db=db_data)
#
# cursor = db.cursor(cursor=pymysql.cursors.DictCursor)  # 创建一个指针对象
# #查询SQL
# cursor.execute("SELECT robot_entity_id FROM robot_entity  ORDER BY sip_username asc")  # 执行sql语句
# results = cursor.fetchall()
# print(results)
# a=results[1].values()'10.76.23.44','10.76.23.45','10.76.23.46',''10.76.23.47',

values=['10.76.23.43','10.76.23.44','10.76.23.45','10.76.23.46','10.76.23.47','10.76.23.51','10.76.23.52','10.76.23.53','10.76.23.54','10.76.23.55']

for value in  values:
    print(value)
    # headers = {"Content-Type": "application/json;charset=UTF-8",
    #             "Authorization":"bf0a3d5c418646ae84c4459fa602584f"
    #  7635bcba2fe84d02b430e86d04eeb91a               }
    url ="http://"+value+":8080/robotSIP/batch/01b52acaa1394ff7beea513879f15904"
    # data = {
    #
    #      "robotBatchId":"1345e3b1929f4d4eb3a9b0d272e26d69"
    # }
    results = requests.post(url)
    print (results.text)
    re = results.text
    print (results.status_code)