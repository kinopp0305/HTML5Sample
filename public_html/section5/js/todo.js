/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



	// タスクを表示する関数
	function showTask(selectedKey) {
            	// SPANタグの取得
        	var taskList = document.getElementById("taskList");
		// 表示のクリア
		taskList.innerHTML = "";

		// 全タスクの表示
		for (var i=0; i<localStorage.length; i++) {
			// キーと値の取得
			var key = localStorage.key(i);
			var data = localStorage.getItem(key);

			// 「:」で分割して配列に代入
			var taskData = data.split(':');

			if (selectedKey == key) {
			    // 選択されたタスクの表示
			    taskList.innerHTML
			     += '<input type="range" name="modProgress" '
			     + ' min="0" max="100" step="5" '
			     + ' value="' + taskData[1] + '">'
			     + '<input type="text" name="modTask" '
			     + ' size="30" value="' + taskData[0] + '">'
			     + '<input type="button" value="タスクの修正" '
			     + ' onClick="setTask(' + key + ')">'
			     + '<input type="button" value="タスクの削除" '
			     + ' onClick="removeTask(' + key + ')">'
			     + '<br><br>';
			} else {
			    // 選択されていないタスクの表示
			    taskList.innerHTML
			     += '<meter min="0" max="100" '
			     + ' value="' + taskData[1] + '"></meter>'
			     + '<a href="#" onClick="showTask(' + key + ')"> ' 
			     + ' [ ' + taskData[0]
			     + ' (' + taskData[1] +'%) ]</a>'
			     + '<br><br>';
			}
		}
	}

	// タスクをセットする関数
	function setTask(selectedKey) {
		if (selectedKey == 'new') {
			// タスクの追加
			var key = new Date().getTime();
			var data = document.form1.newTask.value;
			var progress = document.form1.newProgress.value;
		} else {
			// 選択されたタスクの修正
			var key = selectedKey;
			var data = document.form1.modTask.value;
			var progress = document.form1.modProgress.value;
		}

		// 保存するデータの作成
		var data = data + ':' + progress;

		// 保存
		localStorage.setItem(key, data);

		// タスクの再表示
		showTask();
	}

	// タスクを削除する関数
	function removeTask(selectedKey) {
		if (selectedKey == 'all') {
			// 全タスクの削除
			localStorage.clear();
		} else {
			// 選択されたタスクの削除
			localStorage.removeItem(selectedKey);
		}

		// タスクの再表示
		showTask();
	}
