// プレーヤーのサイズを指定
var ytWidth = 640;
var ytHeight = 390;
 
// 埋め込むyoutubeのIDを指定
var ytData = [
    {
        id: 'l_KhuN2nooY'
    }, {
        id: 'vxRaY0mXBbU'
    }, {
        id: 'jDCCynfjX9I'
    }
];
 
ytBaseUrl = 'https://www.youtube.com/embed/';
 
// サムネイル画像の埋め込み準備
var thumbInsert = '';
for(var i = 0; i < ytData.length; i++) {
    thumbInsert += '<li><a href="' + ytBaseUrl + ytData[i]['id'] + '">';
    thumbInsert += '<img src="http://img.youtube.com/vi/' + ytData[i]['id'] + '/mqdefault.jpg" alt="" />';
    thumbInsert += '</a></li>';
}
 
var ytPlayer;
// YouTube Player APIを読み込む
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
// API読み込み後にプレーヤーを埋め込む
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('player', {
        height: ytHeight,
        width: ytWidth,
        videoId: ytData[0]['id']
    });
}
// 動画の再生
function play(ytId, seekTime) {
    ytPlayer.loadVideoById(ytId, seekTime);
}
 
$(function() {
    // サムネイル画像の埋め込み
    $('#thumbnail').append(thumbInsert);
 
    $(document).on('click', '#thumbnail a', function() {
        ytId = $(this).attr('href').replace(ytBaseUrl, '');
        play(ytId, 0);
        return false;
    });
});