/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



	// アドレスを表示する関数
	function showAddress() {
            
            	// TBODYタグの取得
                var addressList = document.getElementById("addressList");
		
                // データベースのオープン
		var db
		 = openDatabase('addressDB','1','Address DB',2*1024*1024);

		// トランザクションの実行
		db.transaction(function(tx) {
			// 検索ワードの取得
			var qword = document.form1.qword.value;

			// 問い合わせのSQL
			sql = 'SELECT id,name,email FROM address_tb'
			 + ' WHERE name LIKE "%' + qword + '%"'
			 + ' OR email LIKE "%' + qword + '%"';

			// SQLの実行（検索）
			tx.executeSql(sql,[], function(tx,rs) {
			    // TBODYタグをクリア
			    addressList.innerHTML = '';

			    // 検索結果の取出し
			    for (var i=0; i<rs.rows.length; i++){
			        var rowText = '<tr>'
			         + '<td>' + rs.rows.item(i).name + '</td>'
			         + '<td>' + rs.rows.item(i).email + '</td>'
			         + '<td><input type="button" '
			         + 'onClick="setId(' + rs.rows.item(i).id + ')" '
			         + ' value="変更する"></td>'
			         + '</tr>';

			        // TBODYタグに結果を追加
			        addressList.innerHTML += rowText;
			    }
			}, null);
		});

		// 送信処理を行わない
		return false;
	}

	// IDを保存し、修正画面へ移動する関数
	function setId(id) {
		// セッションストレージにIDを保存
		sessionStorage.setItem("id",id);
		// 修正画面へ移動
		document.location = "mod_address.html";
	}
