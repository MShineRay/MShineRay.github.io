## 1. /api/search

### desc
搜索

### request method

> 请求方式：POST<br>
> 请求 URL ：[/api/search](#)

### request params
| field       | type | required  | default     | desc   |
| --------  | --------| --------| -------- | ---------- |
| key       | string  |是        |         | 搜索关键字 |
| pageIndex | string  |否        |  1       | 页码 以1开始 |
| pageSize  | string  |否        | 20       | 页长 |


### response demo

```json5
{
  key:"jsbridge"
}
```


### response params

| field       | type | desc   |
| --------  | -------- | ---------- |
| pageIndex | string  | 页码 以1开始 |
| pageSize  | string   | 页长 |
| list  | list   | 列表 |
| -- title  | string   | 标题 |
| -- desc  | string   | 简介 |
| -- creator  | string   | 创建人 |
| -- url  | string   | 超链接 |
| -- createTime  | string   | 创建时间 |
| -- readCount  | string   | 阅读次数 |
| -- likesCount  | string   | 点赞次数 |
| -- id  | string   | 标题 |

### response demo

```json5
{
  "data": {
    pageIndex: 1,
    total: 100,
    "list": [
      {
        "title": "", // 标题
        "desc": "", // 简介
        "creator": "", //创建人
        "url": "",// 超链接
        "createTime": '2021-09-29 16:00:00',// 创建时间
        "readCount": 0, // 阅读次数
        "likesCount": 0, // 点赞次数,
        "id": 0
      }
    ]
  },
  "code": "200",
  "msg": "SUCCESS"
}
```
