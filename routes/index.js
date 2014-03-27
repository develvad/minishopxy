
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.cesta = function(req, res){
	res.render('cesta', {title: 'Mooooork'})
}