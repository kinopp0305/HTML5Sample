/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	// 評価の値を表示する関数
	function showStar() {
            	// 評価のデータ
        	var star = new Array("1：とても悪い","2：悪い","3：ふつう","4：良い","5：とても良い");

                // SPAN（テキスト）の取得
                var outStar = document.getElementById("outStar");
                
		outStar.innerHTML = star[document.form1.star.value-1];
	}

	// 入力文字数を表示する関数
	function showLength() {
            var messageLength = document.getElementById("messageLength");
		messageLength.innerHTML
		 = document.form1.message.value.length+"/100";
	}
