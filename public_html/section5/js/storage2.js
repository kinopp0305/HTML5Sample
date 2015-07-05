/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



	// 値を表示する関数
	function showData() {
            	// SPANタグの取得
        	var message = document.getElementById("message");
		// 入力されたキーを取り出す
		var key = document.form1.ukey.value;
		// 保存された値を取り出す
		var localData = localStorage.getItem(key);
		var sessionData = sessionStorage.getItem(key);

		// キーと値の表示
		message.innerHTML = 'key: <b>' + key + '</b>'
		 + '<br>localStorage: <b>' + localData + '</b>'
		 + '<br>sessionStorage: <b>' + sessionData + '</b>';
	}
