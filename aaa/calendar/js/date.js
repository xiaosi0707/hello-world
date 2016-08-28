var oDate = new Date();
var oMonth = oDate.getMonth() + 1;
var oYear = oDate.getFullYear();
var oDay = oDate.getDate();
var oWeek = oDate.getDay();
var oTodayDate = new Date();
//初始化日历
function calendarInit() {
	var dayNum = 0;
	//日历头
	var calHtml = $('<div class="re__calendar--current"> <a href="##" class="cycle--left"></a> <a href="##" class="cycle--right"></a> <span class="back--today">回今天</span> <span class="chosed--date">' + oYear + '年' + oMonth + '月</span> </div><table> <thead> <tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> </thead> <tbody id="re_calendar--table"></tbody> </table> <div class="slide-up" id="js__btn--up"></div>');
	$('.re__calendar--date').append(calHtml);
	//创建日历行列
	for(var i = 0; i < 6; i++) {
		var oTr = $('<tr></tr>');
		for(var j = 0; j < 7; j++) {
			var oTd = $('<td></td>');
			oTr.append(oTd);
		}
		$('#re_calendar--table').append(oTr);
	}
	var aTd = $('#re_calendar--table td');
	//每月天数
	if(oMonth == 1 || oMonth == 3 || oMonth == 5 || oMonth == 7 || oMonth == 8 || oMonth == 10 || oMonth == 12) {
		dayNum = 31;
	} else if(oMonth == 4 || oMonth == 6 || oMonth == 9 || oMonth == 11) {
		dayNum = 30;
	} else if(oMonth == 2 && isLeadYear(oYear)) {
		dayNum = 29;
	} else {
		dayNum = 28;
	}
	//每月开始日期和星期对应关系
	oDate.setFullYear(oYear);
	oDate.setMonth(oMonth - 1);
	oDate.setDate(1);
	switch(oDate.getDay()) {
		case 0:
			for(var i = 0; i < dayNum; i++) {
				aTd[i].innerHTML = i + 1;
			}
			break;
		case 1:
			for(var i = 0; i < dayNum; i++) {
				aTd[i + 1].innerHTML = i + 1;
			}
			break;
		case 2:
			for(var i = 0; i < dayNum; i++) {
				aTd[i + 2].innerHTML = i + 1;
			}
			break;
		case 3:
			for(var i = 0; i < dayNum; i++) {
				aTd[i + 3].innerHTML = i + 1;
			}
			break;
		case 4:

			for(var i = 0; i < dayNum; i++) {
				aTd[i + 4].innerHTML = i + 1;
			}
			break;
		case 5:

			for(var i = 0; i < dayNum; i++) {
				aTd[i + 5].innerHTML = i + 1;
			}
			break;
		case 6:
			for(var i = 0; i < dayNum; i++) {
				aTd[i + 6].innerHTML = i + 1;
			}
			break;

	}
	//定位当前日期
	for(var i = 0; i < $('#re_calendar--table td').length; i++) {
		if($('#re_calendar--table td').eq(i).text() == new Date().getDate() && oMonth == new Date().getMonth() + 1 && oYear == new Date().getFullYear()) {
			$('#re_calendar--table td').eq(i).addClass('today');
		}
	}
	//添加初始化日期到页面
	var weekHtml = getWeekStartDate() + '-' + getWeekEndDate();
	$('#re__js--date').text(weekHtml);
}
//回今天

if(oYear == oTodayDate.getFullYear() && oMonth == oTodayDate.getMonth() + 1) {
	$('.back--today').hide()
}

function backToday() {

	$('.re__calendar--date').html('');
	$('.re__list').html('');
	oMonth = oTodayDate.getMonth() + 1;
	oYear = oTodayDate.getFullYear();
	calendarInit();
	$('#modal').slideUp('fast');
}
//下一月
function nextMonth() {
	$('.re__calendar--date').html('');
	oDate.setMonth(oMonth);
	if(oMonth == 12) {
		oMonth = 0;
		oYear = oYear + 1;
	}
	oMonth++;
	calendarInit();
	if(oYear == oTodayDate.getFullYear() && oMonth == (oTodayDate.getMonth() + 1)) {
		$('.back--today').hide()
	}
}
//上一月
function prevMonth() {
	$('.re__calendar--date').html('');
	oMonth--;
	oDate.setMonth(oMonth - 1);
	if(oMonth == 0) {
		oMonth = 12;
		oYear = oYear - 1;
	}
	calendarInit();
	if(oYear == oTodayDate.getFullYear() && oMonth == (oTodayDate.getMonth() + 1)) {
		$('.back--today').hide()
	}
}
//上下周方法
var iNum = 0;

function weekUpDown() {
	weekHtml = formatDate(new Date(oYear, oMonth - 1, (oDay - oWeek + 1) + 7 * iNum)) + '-' + formatDate(new Date(oYear, oMonth - 1, (oDay - oWeek + 7) + 7 * iNum))
	$('#re__js--date').text(weekHtml);
}

//根据选中日期，定位星期区间
function selectDay($this) {
	$('#re_calendar--table td').removeClass('today');
	$this.addClass('today');
	var thisDay = parseInt($this.text());
	var thisDate = formatDate(new Date(oYear, oMonth - 1, thisDay));
	var weekStart = new Date(thisDate).getDay() - 1;
	var weekEnd = new Date(thisDate).getDay() - 7;
	//getDay()取值范围0~6，由于布局导致出现-1需添加判断重置取值范围
	if(weekStart == -1) {
		weekStart = 6;
		weekEnd = 0;
	}
	weekHtml = formatDate(new Date(oYear, oMonth - 1, (thisDay - weekStart))) + '-' + formatDate(new Date(oYear, oMonth - 1, (thisDay - weekEnd)));
	$('#re__js--date').text(weekHtml);
	$('#modal').slideUp('fast');
	return oYear+'-'+oMonth+'-'+thisDay;
}
//初始化本周开始日期
function getWeekStartDate() {
	var weekStartDate = new Date(oYear, oMonth - 1, oDay - oWeek + 1);
	return formatDate(weekStartDate);
}
//初始化本周结束日期
function getWeekEndDate() {
	var weekEndDate = new Date(oYear, oMonth - 1, oDay - oWeek + 7);
	return formatDate(weekEndDate);
}
//闰年方法
function isLeadYear(year) {
	if(year % 4 == 0 && year % 100 != 0) {
		return true;
	} else {
		if(year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}
}
//格式化日期：yyyy-MM-dd
function formatDate(date) {
	var myyear = date.getFullYear();
	var mymonth = date.getMonth() + 1;
	var myweekday = date.getDate();
	if(mymonth < 10) {
		mymonth = "0" + mymonth;
	}
	if(myweekday < 10) {
		myweekday = "0" + myweekday;
	}
	return(myyear + "-" + mymonth + "-" + myweekday);
}