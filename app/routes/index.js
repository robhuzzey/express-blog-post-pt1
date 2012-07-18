
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Widgets inc.' })
};

/*
 * GET hello world example.
 */
 exports.helloWorld = function(req, res){
  res.render('helloWorld', { 
  	title: 'hello world example', 
  	greeting: 'looks like this works!'
  });
};