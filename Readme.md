# dhbox前端

## 启动

> docker run --name dh-frontend -d --network my-net registry.cn-shanghai.aliyuncs.com/mrbook/dhbox-frontend:0.0.10

# 启动nginx

> docker run --name nginx --network my-net -p 80:80 -v /home/nginx.conf:/etc/nginx/nginx.conf:ro -d nginx