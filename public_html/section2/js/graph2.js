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

	// 折れ線グラフ
	// パスの開始
	context.beginPath();
	for (i=0;i<data.length;i++) {
		// 座標の設定
		var x = 100 + 50*i;
		var y = 250 - data[i];
		// 始点とそれ以外で処理をわける
		if (i == 0) {
			// 座標の移動
			context.moveTo(x,y);
		} else {
			// 線の描画
			context.lineTo(x,y);
		}
	}
	// パスの描画
	context.stroke();

	// マーク	
	// 値の配置位置の指定
	context.textBaseline = "middle";
	context.textAlign = "left";
	// マークの描画
	for (i=0;i<data.length;i++) {
		// 頂点の設定
		var x = 100 + 50*i;
		var y = 250 - data[i];
		// 四角形、テキストの描画
		context.fillStyle = color[i];
		context.fillRect(x-5,y-5,10,10);
		context.fillText(data[i],x+5,y);
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