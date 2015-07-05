/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// ソースの切り替え関数
function changeSrc(index) {
    var image = document.getElementById("image1");
    var audio = document.getElementById("audio1");

    // ソースデータの作成
    var imageData = new Array("./img/spring.jpg","./img/summer.jpg","./img/autumn.jpg","./img/winter.jpg");
    var audioData = new Array("./mp3/spring.mp3","./mp3/summer.mp3","./mp3/autumn.mp3","./mp3/winter.mp3");
		
    // src属性の切り替え
    image.src = imageData[index];
    audio.src = audioData[index];
    // 再生
    audio.play();
}