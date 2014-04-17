
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var renderVideoList = function () {
  // TODO
  $('#video-list').html('');
  var template = $('#templates .video-list-item').html();
  for (var i = 0; i < videos.length; i++) {
    var newHtml = Robin.render(template, videos[i]);
    $('#video-list').append(newHtml);
  }
};


$('form').on('submit', function(e) {
  e.preventDefault();
  var title = $('.title').val();
  var youtubeId = $('.youtubeId').val();
  videos.push({ title: title, youtubeId: youtubeId });

  renderVideoList();
});
