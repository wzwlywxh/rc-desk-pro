var { createProxyMiddleware } = require('http-proxy-middleware');
var path = require('path');

var express = require('express');
var app = express();
// var cors = require('cors')

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/json', express.static('json'));
// app.use(cors());

app.get('/', function(req, res) {
  res.redirect('/rc-desk-web')
});

app.get('/rc-desk-web/', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname + '/index.html')
  // res.redirect('dist/index.html');
});

var server = app.listen(8898, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:8898', host, port);
});

var options = {
  target: 'http://127.0.0.1:9083/rc-desk-server', // 后台服务器
  pathRewrite: {'^/rc-desk-server' : ``},
  changeOrigin: true,
  // auth: 'sysadmin:1'
};
// if (proxyConfig.configAuth) {
//   options.auth = `sysadmin:1`
// }
var exampleProxy = createProxyMiddleware(options);  //开启代理功能，并加载配置
app.use('/rc-desk-api', exampleProxy);//对地址为’/‘的请求全部转发
