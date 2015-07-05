/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function func(){
	// キャンバスの取得
	var canvas = document.getElementById("canvas1");
	// コンテキストの取得
	var context = canvas.getContext("2d");

	// 線の色の指定
	context.strokeStyle = "red";
	// 塗りつぶしの色の指定
	context.fillStyle = "blue";

	// ベースの線を描画
	// パスの開始
	context.beginPath();
	// 座標の移動
	context.moveTo(50,200);
	// 線の描画
	context.lineTo(350,200);
	// 座標の移動
	context.moveTo(300,50);
	// 線の描画
	context.lineTo(300,250);
	// パスの描画
	context.stroke();

	// フォントの指定
	context.font = "14px 'メイリオ'";

	// 縦方向topのテキストを描画
	context.textBaseline = "top";
	context.textAlign = "center";
	context.fillText("Top",50,200);

	// 縦方向middleのテキストを描画
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.fillText("Middle",150,200);

	// 縦方向bottomのテキストを描画
	context.textBaseline = "bottom";
	context.textAlign = "center";
	context.fillText("Bottom",250,200);

	// 横方向rightのテキストを描画
	context.textBaseline = "top";
	context.textAlign = "right";
	context.fillText("Right",300,50);

	// 横方向centerのテキストを描画
	context.textBaseline = "top";
	context.textAlign = "center";
	context.fillText("Center",300,100);

	// 横方向leftのテキストを描画
	context.textBaseline = "top";
	context.textAlign = "left";
	context.fillText("Left",300,150);
}