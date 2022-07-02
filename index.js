const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

ffmpeg('./Videos/05.mp4')
  .setStartTime('00:00:01')
  .output('video_out.mp4')
  .on('end', function(err) {
    if(!err) { console.log('conversion Done') }
  })
  .on('error', function(err){
    console.log('error: ', err)
  }).run()