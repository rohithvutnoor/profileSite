var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var urls = [];
var url = "http://cbit.ac.in/?q=node/2219";




	request(url,function(err,res,body){
	
	var $ =  cheerio.load(body);
	
	
	$('a', '.node').each(function(){
		var titlep = $(this).text();
		var urlc = $(this).attr('href');
	
	
		var news = {
			title:titlep,
			links:urlc
		};
//			var url1 = $(this).text();
			urls.push(news);
	
		});
		console.log(urls);

	//console.log(news);
	
	});