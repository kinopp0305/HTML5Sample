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

	// パスの開始
	context.beginPath();
	// 円の描画
	context.arc(50,100,40,0,2*Math.PI,true);
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 円の描画
	context.arc(200,100,40,0,2*Math.PI,true);
	// 塗りつぶし
	context.fill();

	// パスの開始
	context.beginPath();
	// 円の描画
	context.arc(350,100,40,0,2*Math.PI,true);
	// 塗りつぶし
	context.fill();
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 弧の描画
	context.arc(50,250,40,0,(1/2)*Math.PI,true);
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 弦の描画
	context.arc(200,250,40,0,(1/2)*Math.PI,true);
	// パスを閉じる
	context.closePath();
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 座標の移動
	context.moveTo(350,250);
	// 扇形の描画
	context.arc(350,250,40,0,(1/2)*Math.PI,false);
	// パスを閉じる
	context.closePath();
	// パスの描画
	context.stroke();
}