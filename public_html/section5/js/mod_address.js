/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	// 選択されたアドレスを表示する関数
	function showAddressId() {
            	// データベースのオープン
        	var db = openDatabase('addressDB','1','Address DB',2*1024*1024);
		// トランザクションの実行
		db.transaction(function(tx) {
			// 問い合わせのSQL
			var sql = 'SELECT name,email FROM address_tb'
			 + ' WHERE id = ' + sessionStorage.getItem("id");

			// SQLの実行
			tx.executeSql(sql,[], function(tx,rs) {
			    // 検索結果の取出し
			    document.form1.uname.value
			     = rs.rows.item(0).name;
			    document.form1.umail.value
			     = rs.rows.item(0).email;
			}, null);
		});
	}

	// データを更新する関数
	function updateAddress() {
            	// SPANタグの取得
        	var message = document.getElementById("message");
                // データベースのオープン
                var db = openDatabase('addressDB','1','Address DB',2*1024*1024);
                
		// トランザクションの実行
		db.transaction(function(tx) {
			// 入力されたデータの取得
			var uname = document.form1.uname.value; 
			var umail = document.form1.umail.value;

			// データを更新するSQL
			var sql = 'UPDATE address_tb SET '
			 + ' name = "' + uname + '", email = "' + umail + '" '
			 + ' WHERE id = ' + sessionStorage.getItem("id");

			// SQLの実行
			tx.executeSql(sql);

			// 完了メッセージ
			message.innerHTML = '変更内容を保存しました。'
			+ '<br><br>名前：<b>' + uname + '</b>'
			+ '<br><br>メールアドレス：<b>' + umail + '</b>';
		});

		// 送信処理を行わない
		return false;
	}

	// データを削除する関数
	function deleteAddress() {
            	// SPANタグの取得
        	var message = document.getElementById("message");
                // データベースのオープン
                var db = openDatabase('addressDB','1','Address DB',2*1024*1024);
                
		// トランザクションの実行
		db.transaction(function(tx) {

			// データを削除するSQL
			var sql = 'DELETE FROM address_tb '
			 + ' WHERE id = ' + sessionStorage.getItem("id");

			// SQLの実行
			tx.executeSql(sql);

			// 完了メッセージ
			message.innerHTML = 'データを削除しました。';
		});
	}
