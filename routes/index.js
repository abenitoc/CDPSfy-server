var express = require('express');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring')
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next){
  console.log(req.body.extension);

  var name = req.body.name;
  var extension = req.body.extension;
  var id = req.body.id;
  var track_buffer = req.body.track;

  var server_url = "http://localhost:3000/";

  var url = server_url + id + "." + extension;
  var write_path =  "/mnt/nas/" + id + "." + extension;

    console.log(write_path);
    fs.writeFile( write_path, track_buffer, function(err){
    if(err){
      return console.log(err);
      res.sendStatus(500);
    }
    console.log("The file was saved!");
    res.status(200).json({url: id});
  });

});

router.delete('/:id', function(req,res,next){
  // Aquí debe implementarse el borrado del fichero de audio indetificado por trackId en tracks.cdpsfy.es
  var track_url = req.params.id;

  //TODO: Check extension
  var deletion_path = "/mnt/nas/" + track_url + ".mp3";
  if (fs.existsSync(deletion_path)){
      console.log("llego el limpiador");
      fs.unlink(deletion_path);
      res.status(202);
  }else {
    res.status(500);
  }




});

module.exports = router;
