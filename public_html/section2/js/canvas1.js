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

	// 四角形（輪郭のみ）の描画
	context.strokeRect(50,50,100,80);
	// 四角形（塗りつぶし）の描画
	context.fillRect(200,50,100,80);

	// 線の色の指定
	context.strokeStyle = "red";
	// 塗りつぶしの色の指定
	context.fillStyle = "blue";

	// 四角形（輪郭のみ）の描画
	context.strokeRect(50,150,100,80);
	// 四角形（塗りつぶし）の描画
	fillRect(200,150,100,80);  
}