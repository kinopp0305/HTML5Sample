/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 再生／一時停止の切り替え関数
function changePlay() {
    // ビデオの取得
    var video = document.getElementById("video1");
    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
        
    // 停止中かどうかで処理を切り替える
    if (video.paused) {
        // 再生
        video.play();
	// ボタンのラベルをPauseに変更
	document.form1.playButton.value = "Pause";
    } else {
	// 一時停止
	video.pause();
	// ボタンのラベルをPlayに変更
	document.form1.playButton.value = "Play";
    }
}

// 消音／消音解除の切り替え関数
function changeMute() {
    // ビデオの取得
    var video = document.getElementById("video1");
    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
        
    // 消音かどうかで処理を切り替える
    if (video.muted) {
	// 消音解除
	video.muted = false;
	// ボタンのラベルをMuteに変更
	document.form1.muteButton.value = "Mute";
    } else {
	// 消音
	video.muted = true;
	// ボタンのラベルをSpeakerに変更
	document.form1.muteButton.value = "Speaker";
    }
}

// 音量を変更する関数
function changeVolume(buttonClick) {
            
    // ビデオの取得
    var video = document.getElementById("video1");
    var volumeText = document.getElementById("volumeText");
    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
                
    // 音量をスライダの値に変更
    video.volume = document.form1.volumeRange.value;
    // 音量（0.0〜1.0）をテキストで表示
    volumeText.innerHTML = video.volume;
}

// 再生位置を変更する関数
function changeTime() {
    // ビデオの取得
    var video = document.getElementById("video1");
    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
                
    // 再生位置の変更
    video.currentTime = document.form1.timeRange.value;
}

// 再生位置を表示する関数
function showTime() {
    // ビデオの取得
    var video = document.getElementById("video1");
    var timeText = document.getElementById("timeText");

    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
            
    // スライダの最大値に動画の長さを指定
    document.form1.timeRange.max = video.duration;
    // スライダの値を再生位置に変更
    document.form1.timeRange.value = video.currentTime;
    // 再生位置／長さをテキストで表示
    timeText.innerHTML = Math.round(video.currentTime) + "s/"
			+ Math.round(video.duration) + "s";
}
	
// 動画サイズを変更する関数
function changeSize(full) {
    // ビデオの取得
    var video = document.getElementById("video1");
    var sizeText = document.getElementById("sizeText");

    // 再生中イベントの登録
    video.addEventListener("timeupdate", showTime, false);
            
    // スライダの最大値をブラウザの幅に変更
    document.form1.sizeRange.max
		 = document.body.clientWidth;

    // 最大化ボタンをクリックしたときの処理
    if (full) {
	// スライダの値をブラウザの幅に変更
	document.form1.sizeRange.value
		= document.body.clientWidth;
    }
    // VIDEOタグの幅をスライダの値に変更
    video.width = document.form1.sizeRange.value;
    // VIDEOタグの高さを計算
    video.height = video.width*(240/320);
    // 動画のサイズをテキストで表示
    sizeText.innerHTML = video.width + "*" + video.height;
}