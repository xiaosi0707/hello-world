//选择性别
$('.m-reg-sex img').on('touchstart', function() {
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
$('.m-user-upgrade-layer li').click(function(){
	choiceRadio('.m-user-upgrade-layer li',this)
})
$('.m-user-message-input button').click(function(){
	choiceRadio('.m-user-message-input button',this)
})
//打开会员升级选择价钱
$('.m-user-upgrade-list dl').click(function(){
	$('.m-layer').fadeIn();	//打开遮罩
	$('.m-user-upgrade-layer').css({
		'bottom':0,
	})
})
//关闭会员升级选择价钱
$('.m-layer,.m-close').click(function(){
	$('.m-layer').fadeOut();	//关闭遮罩
	$('.m-user-upgrade-layer').css({
		'bottom':-$('.m-user-upgrade-layer').height(),
	})
})
//单选方法
function choiceRadio(objCls,objTri)
	{
		$(objCls).removeClass('active');
		$(objCls).find('img').attr('src','img/check.png');
		$(objTri).find('img').attr('src','img/checked.png');
		$(objTri).addClass('active');
	}
//展开收起
function showHide(objTri, objTar, objPar) { //触发元素，目标元素，触发和目标的父级元素
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
//设置遮罩层高度
$('.m-layer').css('height',$(document).height());
