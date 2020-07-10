module.exports = function(req, res, next){
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //5
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //6
  next();
 };