/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

	// FIELDSETのdisabledを切り替える関数
	function changeOption() {
            // FIELDSETの取得
            var optionQuery = document.getElementById("optionQuery");
		optionQuery.disabled
		 = !(document.form1.optionCheck.checked);
	}	

	// 入力された価格の値をチェックする関数
	function checkPrice() {
            
        	// 価格（最小値、最大値）の取得
                var minprice = document.form1.minprice;
                var maxprice = document.form1.maxprice;
		if (Number(minprice.value) > Number(maxprice.value)) {
			// カスタムメッセージをセット
			minprice.setCustomValidity("価格を正しく入力してください。");
		} else {
			// エラーをクリア
			minprice.setCustomValidity("");
		}
	}



