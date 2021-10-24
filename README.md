# 项目名称
https://mshineray.github.io

## desc

## [directoryTree](./directoryTreeDesc.md)
## env
- 配置hosts
  ```
  host文件位置：
  mac：sudo vim /etc/hosts
  
  windows：c:\windows\system32\drivers\etc
  
  
      #FE localtion  environment
      127.0.0.1 mock.local.fe.cn
      127.0.0.1 dev.local.fe.cn 
      127.0.0.1 test.local.fe.cn
      127.0.0.1 sit.local.fe.cn
      127.0.0.1 uat.local.fe.cn
      127.0.0.1 pre.local.fe.cn 
      
  ```
- Project setup
  ```
  npm install
  ```
- Compiles and hot-reloads for mock
  ```
  npm run mock
  ```

- Compiles and hot-reloads for development
  ```
  npm run dev
  ```

- Compiles and minifies for production
  ```
  npm run build
  ```

- Run your tests
  ```
  npm run test
  ```

- Lints and fixes files
  ```
  npm run lint
  ```