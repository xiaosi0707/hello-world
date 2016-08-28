//选择性别
$('.m-reg-sex img').on('touchstart', function() {
	console.log('性别选择');
		$('.m-reg-sex img').animate({
			'opacity': 0.7
		}, 100)
		$(this).animate({
			opacity: 1,
		}, 500)
		console.log($(this).attr('data-sex'))
	})
	//获取验证码
$.fn.CountdownFn = function() {
	console.log('验证码');
	var i = 5;
	var timer = null;
	$('#m-js-btn').on('click', function() {
		var _this = $(this);
		_this.off();
		timer = setInterval(function() {
			i--;
			_this.css({
				'background': '#F7F7F7',
				'color': '#A9A9A9',
			}).html(i + '秒后重新获取');
			if (i == 0) {
				clearInterval(timer);
				_this.css({
					'background': 'white',
					'color': '#FFBAC1',
				}).html('重新获取');
				$().CountdownFn();
			}
		}, 1000)
	})
}
$().CountdownFn();

//会员信息调用
$('#js-trigger a').on('click', function() {
		showHide($(this), $(this).next(), $('#js-trigger section'));
	})
	//会员中心调用
$('#js-trigger-1').on('click', function() {
		showHide($(this), $(this).next());
	})
	//单选方法调用
$('.m-user-upgrade-layer li').click(function() {
	choiceRadio('.m-user-upgrade-layer li', this)
})
	//会员列表
$('.m-userlist dl').click(function() {
	choiceRadio('.m-userlist dl', this)
})
$('.m-user-message-input button').click(function() {
		choiceRadio('.m-user-message-input button', this)
	})
	//打开会员升级选择价钱
$('.m-user-upgrade-list dl').click(function() {
		$('.m-layer').fadeIn(); //打开遮罩
		$('.m-user-upgrade-layer').css({
			'bottom': 0,
		})
	})
	//关闭会员升级选择价钱
$('.m-close').click(function() {
		$('.m-layer').fadeOut(); //关闭遮罩
		$('.m-user-upgrade-layer').css({
			'bottom': -$('.m-user-upgrade-layer').height(),
		})
	})
	//单选方法
function choiceRadio(objCls, objTri) {
	console.log('单选');
	$(objCls).removeClass('active');
	//$(objCls).find('img').attr('src', 'img/check.png');
	//$(objTri).find('img').attr('src', 'img/checked.png');
	$(objTri).addClass('active');
}

//展开收起
function showHide(objTri, objTar, objPar) { //触发元素，目标元素，触发和目标的父级元素
	console.log('展开收起');
	if (objPar) objPar.slideUp();
	if (objTar.css('display') == 'none') {
		objTri.find('font img').css({
			transform: 'rotate(90deg)',
		})
		objTar.slideDown();
	} else {
		objTri.find('font img').css({
			transform: 'rotate(0deg)',
		})
		objTar.slideUp();
	}
}
/*历史体重-编辑*/
$('#js-body').click(function() {
		if ($(this).attr('isClick') == 'no') {
			$(this).html('完成');
			$('.m-person-message input').css('text-decoration', 'underline').removeAttr('disabled');
			$(this).attr('isClick', 'yes');
		} else {
			$('.m-person-message input').css('text-decoration', 'none').attr('disabled', 'disabled');
			$(this).html('编辑');
			$(this).attr('isClick', 'no');
		}

	})
	/*历史体重-编辑*/
	/********************单选start*/
	//数据
var arrSex = ['男', '女'];
var arrEducation = ['小学', '初中', '高中', '专科', '本科', '硕士', '博士', '博士后'];
var arrMarr = ['未婚', '已婚', '离异'];
var arrFat = ['有', '无'];
var arrWay = ['跑步', '节食', '不喝水'];
var arrSupport = ['支持', '不支持'];
var arrSports = ['游泳', '打球', '打牌', '跑步'];
var arrSpe = ['正常', '不正常'];
var arrShit = ['1次', '2次'];
var arrDrug = ['经常', '偶尔'];
var arrTarget = ['80', '70', '90', '100'];
var arrSkin = ['一般', '很好', '非常好', '差'];
var arrWork = ['好', '中', '差'];
var arrResult = ['一般', '好', '很好', '非常好'];
var arrAbd = ['56', '70', '90', '100'];
var arrType = ['标准', '微胖', '很胖', '超重'];
var arrPosition = ['产品经理', '程序猿哥哥', '运营', 'CEO'];
//性别
$('#js-sex').click(function() {
		data(arrSex);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-sex', $(this).html());
		})
	})
	//学历
$('#js-education').click(function() {
	data(arrEducation);
	choiceRadioInit();
	choiceRadioText();
	$('.m-radio-menu li').click(function() {
		checkedText('#js-education', $(this).html());
	})
})

//婚姻
$('#js-marr').click(function() {
		data(arrMarr);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-marr', $(this).html());
		})
	})
	//肥胖史
$('#js-fat-history').click(function() {
		data(arrFat);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-fat-history', $(this).html());
		})
	})
	//减肥方法
$('#js-way').click(function() {
		data(arrWay);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-way', $(this).html());
		})
	})
	//是否支持
$('#js-support').click(function() {
		data(arrSupport);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-support', $(this).html());
		})
	})
	//经常做的运动
$('#js-sports').click(function() {
		data(arrSports);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-sports', $(this).html());
		})
	})
	//月经是否正常
$('#js-spe').click(function() {
		data(arrSpe);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-spe', $(this).html());
		})
	})
	//大便次数
$('#js-shit').click(function() {
		data(arrShit);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-shit', $(this).html());
		})
	})
	//降压药
$('#js-drug').click(function() {
		data(arrDrug);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-drug', $(this).html());
		})
	})
	//减肥目标
$('#js-target').click(function() {
		data(arrTarget);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-target', $(this).html());
		})
	})
	//皮肤
$('#js-skin').click(function() {
		data(arrSkin);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-skin', $(this).html());
		})
	})
	//工作
$('#js-work').click(function() {
		data(arrWork);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-work', $(this).html());
		})
	})
	//诊断
$('#js-result').click(function() {
		data(arrResult);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-result', $(this).html());
		})
	})
	//腹围
$('#js-abd').click(function() {
		data(arrAbd);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-abd', $(this).html());
		})
	})
//肥胖类型
$('#js-type').click(function() {
		data(arrType);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-type', $(this).html());
		})
	})
//职位
$('#js-position').click(function() {
		data(arrPosition);
		choiceRadioInit();
		choiceRadioText();
		$('.m-radio-menu li').click(function() {
			checkedText('#js-position', $(this).html());
		})
	})
	//样式初始化
function choiceRadioInit() {
	console.log('选项列表');
	if (parseInt($('.m-radio-menu').css('height')) >= $(window).height() - 200) {
		$('.m-radio-menu').css({
			'height': $(window).height() - 200,
			'overflow-y': 'scroll',
			'margin-top': -($(window).height() - 200) / 2
		});
	} else {
		$('.m-radio-menu').css({
			'height': 'auto',
			'overflow': 'hidden',
			'margin-top': -$('.m-radio-menu').height() / 2

		});
	}
}
//填充数据
function data(arr) {
	console.log('动态创建标签');
	$('.m-radio-menu ul').html('');
	for (var i = 0; i < arr.length; i++) {
		var sLi = $('<li>' + arr[i] + '</li>');
		$('.m-radio-menu ul').append(sLi);
	}
}
//当前选中值
function checkedText(objVal, _this) {
	$(objVal).val(_this);
	$('.m-layer,.m-radio-menu').fadeOut();
}

//打开着遮罩和菜单
function choiceRadioText() {
	$('.m-layer').fadeIn();
	$('.m-radio-menu').fadeIn();
}
/***************************单选end*/


/*数量加减Start**************************/
photoNum();
function photoNum() {
	console.log('数量加减');
		var step = 1;
		var $thisVal = 1;
		var orderReg = /\D/g;
		$('.m-product-list-edit').delegate('i', 'click', function() {
			$thisVal = parseInt($(this).prev().val());
			$thisVal++;
			$(this).prev().val($thisVal);
		})
		$('.m-product-list-edit').delegate('em', 'click', function() {
			$thisVal = parseInt($(this).next().val());
			if ($thisVal != 1) $thisVal--;
			$(this).next().val($thisVal);
		})
		$('.m-product-list-edit').delegate('input', 'keyup', function() {
			$(this).val($(this).val().replace(orderReg, ''));
		})
	}

//设置遮罩层高度
$('.m-layer').css('height', $(document).height());
//点击遮罩关闭
$('.m-layer').click(function() {
	//遮罩自身
	$(this).fadeOut();
	//会员升级底部菜单
	$('.m-user-upgrade-layer').css({
			'bottom': -$('.m-user-upgrade-layer').height(),
		})
		//单选菜单
	$('.m-radio-menu').fadeOut();
})