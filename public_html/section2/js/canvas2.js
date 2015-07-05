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
	// 座標の移動
	context.moveTo(50,50);
	// 線の描画
	context.lineTo(100,150);
	context.lineTo(150,100);
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 座標の移動
	context.moveTo(200,50);
	// 線の描画
	context.lineTo(250,150);
	context.lineTo(300,100);
	// パスを閉じる
	context.closePath();
	// パスの描画
	context.stroke();

	// パスの開始
	context.beginPath();
	// 座標の移動
	context.moveTo(50,150);
	// 線の描画
	context.lineTo(100,250);
	context.lineTo(150,200);
	// パスを閉じる
	context.closePath();
	// 塗りつぶし
	context.fill();

	// パスの開始
	context.beginPath();
	// 座標の移動
	context.moveTo(200,150);
	// 線の描画
	context.lineTo(250,250);
	context.lineTo(300,200);
	// パスを閉じる
	context.closePath();
	// 塗りつぶし
	context.fill();
	// パスの描画
	context.stroke();
}