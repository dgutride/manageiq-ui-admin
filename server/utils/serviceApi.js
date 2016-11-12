/* eslint-disable no-undef, no-console, angular/log */

'use strict';

var express = require('express');
var httpProxy = require('http-proxy');
var url = require('url');
var proxyService = require('./proxy')();


var router = express.Router();

var proxyHost = proxyService.proxyHost();
var proxyTarget = 'http://' + proxyHost + '/api';
var proxyErrorHandler = proxyService.proxyErrorHandler;

var proxy = httpProxy.createProxyServer({
  target: proxyTarget,
});

router.use(function(req, res) {
  var path = url.parse(req.url).path;
  console.log('PROXY: ' + proxyTarget + path);
  proxy.web(req, res, proxyErrorHandler(req, res));
});

module.exports = router;
