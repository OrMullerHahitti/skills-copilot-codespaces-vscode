//create a we server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;
var comments = [];

var server = http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  console.log(path);
  if(path === '/'){
    fs.readFile('./index.html', function(err, data){
      if(err){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('文件读取失败，请稍后重试！');
      }else{
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
      }
    });
  }else if(path === '/comments'){
    var comment = query.comment;
    comments.push(comment);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(JSON.stringify(comments));
  }else{
    fs.readFile('.' + path, function(err, data){
      if(err){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('文件读取失败，请稍后重试！');
      }else{
        res.end(data);
      }
    });
  }
});

server.listen(port, function(){
  console.log('server is running at http://
