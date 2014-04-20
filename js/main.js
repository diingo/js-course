
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'kid rap' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'piano' },
  { title: 'Drums', youtubeId: 'vhiPKAPD5Aw', genre: 'piano' },
  { title: 'Pablo Fancisco', youtubeId: 'RLmRDfG0d1A', genre: 'comedy' }
];

var stats = {};

var renderVideoList = function () {
  // TODO
  $('#video-list').html('');
  var template = $('#templates .video-list-item').html();
  for (var i = 0; i < videos.length; i++) {
    var newHtml = Robin.render(template, videos[i]);
    $('#video-list').append(newHtml);
  }
};



var renderGenreStats = function() {

  for (var i = 0; i < videos.length; i++) {
    var genre = videos[i]["genre"];
    if (stats[genre]) {
      stats[genre] += 1;
    } else {
      stats[genre] = 1;
    }
  }

  var genreTemplate = $('#templates .genre').html();

  $('#genre-stats').empty();
  for (var genre in stats) {
    var genreCount = stats[genre];
    // TODO
    var data = { genre: genre, count: stats[genre] };
    genreHtml = Robin.render(genreTemplate, data);
    $('#genre-stats').append(genreHtml);
  }

  // reset stats
  stats = {};
  console.log('Stats for each genre: ', stats);
};

renderVideoList();
$('#video-list').on('click', 'a', function(e) {
  e.preventDefault();
  var youtubeId = $(e.currentTarget).data('youtube-id');

  console.log('Clicked on youtube video: ', youtubeId);

  var iframeTemplate = $('#templates .video-embed').html();
  var newIframeHtml = Robin.render(iframeTemplate)
  $('#video-display').append(newIframeHtml);
});

$('form').on('submit', function(e) {
  e.preventDefault();
  var title = $('.title').val();
  var youtubeId = $('.youtubeId').val();
  var genre = $('input[name="genre"]').val();

  videos.push({ title: title, youtubeId: youtubeId, genre: genre });

  renderVideoList();
  renderGenreStats();
});



