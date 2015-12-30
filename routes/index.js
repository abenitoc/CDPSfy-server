var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req,res,next){
  console.log(req.body.extension);

  var name = req.body.name;
  var extension = req.body.extension;
  var id = req.body.id;
  var track_buffer = req.body.track;

  console.log(name);
  console.log(id);
  console.log(extension);

  var url = name;
  var write_path =  "/mnt/nas";
    console.log(write_path);
    fs.writeFile( write_path, track_buffer, function(err){
    if(err){
      return console.log(err);
    }
    console.log("The file was saved!");
    res.sendStatus(200);
  });
  res.sendStatus(200);
});

router.get('/delete', function(req,res,next){
  // Aquí debe implementarse el borrado del fichero de audio indetificado por trackId en tracks.cdpsfy.es
  var track_url = "TODO";
	var deletion_path =  path.resolve(path.relative("/controllers","/CDPSfy/public/")) + track_url;
	console.log(deletion_path);
	fs.unlink(deletion_path);


});

module.exports = router;
