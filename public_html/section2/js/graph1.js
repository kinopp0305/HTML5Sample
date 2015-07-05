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

	// フォントの指定
	context.font = "12px 'メイリオ'";

	// データ
	var label = new Array("A","B","C","D","E");
	var data = new Array(20,160,60,120,80);
	var color = new Array("red","green","blue","orange","magenta");

	// 値の配置位置の指定
	context.textBaseline = "bottom";
	context.textAlign = "center";

	// 棒グラフの描画
	for (i=0;i<data.length;i++) {
		// 四角形の頂点、幅、高さの設定
		var x = 100 + 50*i;
		var y = 250 - data[i];
		var w = 10;
		var h = data[i];
		// 塗りつぶし色の指定
		context.fillStyle = color[i];
		// 四角形の描画
		context.fillRect(x-5,y,w,h);
		// テキストの描画
		context.fillText(data[i],x,y);
	}

	// 軸
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(50,50);
	context.lineTo(50,250);
	context.lineTo(350,250);
	context.stroke();

	// ラベル（縦軸）
	context.fillStyle = "black";
	context.textBaseline = "middle";
	context.textAlign = "right";
	context.fillText("0",45,250);
	context.fillText("100",45,150);
	context.fillText("200",45,50);

	// ラベル（横軸）
	context.textBaseline = "top";
	context.textAlign = "center";
	for (i=0;i<label.length;i++) {
		context.fillText(label[i],100+50*i,250);
	}
}