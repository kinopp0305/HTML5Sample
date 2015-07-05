/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	// アドレスを登録する関数
	function setAddress() {
            	// SPANタグの取得
                var message = document.getElementById("message");
            
		// データベースのオープン
		var db
		 = openDatabase('addressDB','1','Address DB',2*1024*1024);

		// トランザクションの実行
		db.transaction(function(tx) {
			// テーブル作成のSQL
			var sql_create
			 = 'CREATE TABLE IF NOT EXISTS address_tb'
			 + '(id integer primary key, name, email)';

			// SQLの実行（テーブルの作成）
			tx.executeSql(sql_create);

			// 入力データの取得
			var uname = document.form1.uname.value;
			var umail = document.form1.umail.value;

			// データ挿入のSQL
			var sql_insert
			 = 'INSERT INTO address_tb(name,email)'
			 + ' VALUES("' + uname + '","' + umail + '")';

			// SQLの実行（データの挿入）
			tx.executeSql(sql_insert);	

			// 完了メッセージの表示
			message.innerHTML
			 = 'アドレスデータを登録しました。'	
			 + '<br><br>名前：<b>' + uname + '</b>'
			 + '<br><br>メールアドレス：<b>' + umail + '</b>';
		});

		// 送信処理を行わない
		return false;
	}
