/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	// キーと値を保存する関数
	function setData() {
            	// SPANタグの取得
        	var message = document.getElementById("message");

                // 入力されたキーと値を取り出す
		var key = document.form1.ukey.value;
		var data = document.form1.udata.value;

		// ローカルストレージに保存する
		localStorage.setItem(key,data);
		// セッションストレージに保存する
		sessionStorage.setItem(key,data);

		// 保存完了メッセージの表示
		message.innerHTML = 'キー＋値を保存しました。';
	}
