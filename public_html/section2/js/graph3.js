/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function func() {
	// キャンバスの取得
	var canvas = document.getElementById("canvas1");
	// コンテキストの取得
	var context = canvas.getContext("2d");

	// データ
	var label = new Array("A","B","C","D","E");
	var data = new Array(20,160,60,120,80);
	var color = new Array("red","green","blue","orange","magenta");

	// 合計値の計算
	var sum = 0;
	for (i=0;i<data.length;i++) {
		sum = sum + Number(data[i]);
	}

	// 円グラフ
	// 開始角度（-90°）
	var start = (-1/2) * Math.PI;

	// グラフの描画
	for (i=0;i<data.length;i++) {
		// 扇形の角度
		var angle = 2 * Math.PI * (data[i]/sum);
		// 終了角度
		var end = start + angle;

		// 扇形の描画
		context.beginPath();
		context.moveTo(200,150);
		context.arc(200,150,80,start,end,false);
		context.closePath();
		context.stroke();
		
		// 塗りつぶし
		context.fillStyle = color[i];
		context.fill();
		
		// 開始角度
		start = end;
	}

	// 凡例
	context.font = "12px 'メイリオ'";
	context.textBaseline = "top";
	context.textAlign = "left";
	for (i=0;i<data.length;i++) {	
		context.fillStyle = color[i];
		context.fillRect(20,20*i+100,10,15);
		context.fillStyle = "black";
		context.fillText(label[i]+":"+data[i],40,20*i+100);
	}
}