console.log('service worker register success')
self.addEventListener('install', async (event) => {
  // 首次加载后触发，以后加载页面不触发，除非文件名变更
  console.log('install', event)
})
self.addEventListener('activate', async (event) => {
  // 当 service worker 安装完成后，会接收到一个激活事件， 
  // 主要用途是清理先前版本的 service worker 脚本中使用的资源
  console.log('activate', event);
})
self.addEventListener('fetch', async (event) => {
  // 有网络请求会触发
  // console.log('fetch', event)
})