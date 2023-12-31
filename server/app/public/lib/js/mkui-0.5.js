!(function(window) {

	var Mk = function() {
		this.u = navigator.userAgent.toLowerCase();
	};

	//获取网址不带参数
	Mk.prototype.parseUrl = function(str) {
		var str = str ? str : window.location.href;
		if(str.indexOf('?') >= 0) {
			str = str.substring(0, str.indexOf('?'))
		}
		return str;
	};

	//获取url中的参数值
	Mk.prototype.getParams = function(name, url) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = url ? url.substring(url.indexOf('?') + 1).match(reg) : window.location.search.substr(1).match(reg);
		if(r != null) return r[2];
		return null;
	};

	//来源域名
	Mk.prototype.preDomain = function() {
		var preUrl = document.referrer;
		var _url = preUrl.replace(/http:\/\/|https:\/\//, '');
		return _url.substr(0, _url.indexOf('/'));
	};

	//当前域名
	Mk.prototype.domain = function() {
		var _url = location.href.replace(/http:\/\/|https:\/\//, '');
		return _url.substr(0, _url.indexOf('/'));
	};

	//返回上一页
	Mk.prototype.back = function() {
		window.location.href = (window.history.go(-1) || document.referrer || window.history.back());
		return false;
	};

	//判断是否是手机
	Mk.prototype.isMobile = function() {
		return this.u.indexOf("mobile") == -1 ? false : true;
	};

	//判断是否是iphone
	Mk.prototype.isIOS = function() {
		return this.u.indexOf("iphone") == -1 || this.u.indexOf('mac') == -1 ? false : true;
	};

	//判断是否是安卓
	Mk.prototype.isAndroid = function() {
		return this.u.indexOf("android") == -1 || this.u.indexOf('linux') == -1 ? false : true;
	};

	//判断是否是微信
	Mk.prototype.isWx = function() {
		return this.u.indexOf("micromessenger") == -1 ? false : true;
	};

	//判断是否是手机号
	Mk.prototype.isTel = function(num) {
		return /^(13[\d]{9}|15[\d]{9}|17[6-8][\d]{8}|14[57][\d]{8}|18[\d]{9})$/.test(num) ? true : false;
	};

	//简易判断手机号
	Mk.prototype.isLightTel = function(num) {
		return /^(1[\d]{10})$/.test(num) ? true : false;
	};

	//判断是否是邮箱
	Mk.prototype.isEmail = function(str) {
		return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(str) ? true : false;
	};

	//判断是否是数字
	Mk.prototype.isNumber = function(str) {
		return /^[0-9]*$/.test(str) ? true : false
	};

	//判断是否有这个字符窜
	Mk.prototype.hasString = function(all, str) {
		return all.indexOf(str) == -1 ? false : true;
	};

	//判断是否存在特殊字符
	Mk.prototype.isSpecialString = function(str) {
		return /[^\u4E00-\u9FA5\d\w \(\)\（\）\.]/g.test(str) ? true : false;
	};

	//判断是否是大于0的正整数
	Mk.prototype.isGt0 = function(num) {
		return /^[0-9]+$/.test(num) ? true : false;
	};

	//判断是否是身份证号
	Mk.prototype.isIdCard = function(idCard) {
		var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
		var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
		idCard = idCard.replace(/ /g, "").replace(/(^\s*)|(\s*$)/g, "");
		/**
		 * 验证18位数身份证号码中的生日是否是有效生日
		 * @param idCard 18位书身份证字符串
		 * @return
		 */
		function isTrueValidateCodeBy18IdCard(a_idCard) {
			var sum = 0; // 声明加权求和变量
			if(a_idCard[17].toLowerCase() == 'x') {
				a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
			}
			for(var i = 0; i < 17; i++) {
				sum += Wi[i] * a_idCard[i]; // 加权求和
			}
			var valCodePosition = sum % 11; // 得到验证码所位置
			if(a_idCard[17] == ValideCode[valCodePosition]) {
				return true;
			} else {
				return false;
			}
		};

		function isValidityBrithBy18IdCard(idCard18) {
			var year = idCard18.substring(6, 10);
			var month = idCard18.substring(10, 12);
			var day = idCard18.substring(12, 14);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
			var tempMonth = "",
				tempDate = "";

			if(temp_date.getMonth() + 1 < 10) {
				tempMonth = "0" + (temp_date.getMonth() + 1);
			} else {
				tempMonth = temp_date.getMonth() + 1;
			}
			if(temp_date.getDate() < 10) {
				tempDate = "0" + temp_date.getDate();
			} else {
				tempDate = temp_date.getDate()
			}

			if(temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
				return {
					isValidityBrith: false,
					date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
				};
			} else {
				return {
					isValidityBrith: true,
					date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
				};
			}
		}
		/**
		 * 验证15位数身份证号码中的生日是否是有效生日
		 * @param idCard15 15位书身份证字符串
		 * @return
		 */
		function isValidityBrithBy15IdCard(idCard15) {
			var year = idCard15.substring(6, 8);
			var month = idCard15.substring(8, 10);
			var day = idCard15.substring(10, 12);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

			var tempMonth = "",
				tempDate = "";

			if(temp_date.getMonth() + 1 < 10) {
				tempMonth = "0" + (temp_date.getMonth() + 1);
			} else {
				tempMonth = temp_date.getMonth() + 1;
			}
			if(temp_date.getDate() < 10) {
				tempDate = "0" + temp_date.getDate();
			} else {
				tempDate = temp_date.getDate()
			}

			if(temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
				return {
					isValidityBrith: false,
					date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
				};
			} else {
				return {
					isValidityBrith: true,
					date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
				};
			}
		};

		if(idCard.length == 15) {
			return isValidityBrithBy15IdCard(idCard);
		} else if(idCard.length == 18) {
			var a_idCard = idCard.split(""); // 得到身份证数组
			if(isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		return /^[0-9]+$/.test(idCard) ? true : false;
	};

	//设置cookie
	Mk.prototype.setCookie = function(name, value, time, domain) {

		var oDate = new Date();
		oDate.setTime(oDate.getTime() + (1000 * 60 * 60 * time || 1000 * 60 * 60 * 0.5));

		if(domain) {
			document.cookie = name + '=' + value + ';expires=' + oDate.toUTCString() + ';path=/' + ';domain=' + domain;
			return;
		}
		document.cookie = name + '=' + value + ';expires=' + oDate.toUTCString() + ';path=/';
	};

	//获取cookie
	Mk.prototype.getCookie = function(name) {
		var arr = document.cookie.split('; ');
		for(var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('=');
			if(arr2[0] == name) {
				return arr2[1];
			}
		}
		return '';
	};

	//删除cookie
	Mk.prototype.delCookie = function(name) {
		this.setCookie(name, 1, -1);
	};

	//设置 永久存储
	Mk.prototype.setLocal = function(name, value) {
		localStorage.setItem(name, value);
	};

	//获取 永久存储
	Mk.prototype.getLocal = function(name) {
		return localStorage.getItem(name);
	};

	//删除 永久存储
	Mk.prototype.delLocal = function(name) {
		localStorage.removeItem(name);
	};

	//判断 永久存储
	Mk.prototype.hasLocal = function(name) {
		return this.getLocal(name) ? true : false;
	};

	//获取 临时存储
	Mk.prototype.getSession = function(name) {
		return sessionStorage.getItem(name);
	};

	//设置 临时存储
	Mk.prototype.setSession = function(name, value) {
		sessionStorage.setItem(name, value);
	};

	//删除 临时存储
	Mk.prototype.delSession = function(name) {
		sessionStorage.removeItem(name);
	};

	//判断 临时存储
	Mk.prototype.hasSession = function(name) {
		return this.getSession(name) ? true : false;
	};

	//添加历史记录
	Mk.prototype.addHistory = function(name, title, url) {
		if(history.state == null) {
			window.history.pushState({
				page: name
			}, title, url);
		}
	};

	//替换历史记录
	Mk.prototype.replaceHistory = function(name, title, url) {
		if(history.state == null) {
			window.history.replaceState({
				page: name
			}, title, url);
		}
	};

	Mk.prototype.goBack = function() {
		window.location.href = (window.history.go(-1) || document.referrer || window.back() || window.history.back());
		return false;
	};

	//小于9补0
	Mk.prototype.parseNumber = function(num) {
		return(num > 9) ? num : '0' + num;
	};

	/**
	 * @description 用来计算时间差的毫秒数，eg:剩余1天20小时30分钟10秒
	 * @param {Object} time 毫秒
	 */
	Mk.prototype.countDown = function(time, cb) {
		var _this = this;
		var times = new Date().getTime() - time;
		var surplus = {
			"d": Math.floor(times / 1000 / 60 / 60 / 24),
			"h": Math.floor(times / 1000 / 60 / 60 % 24),
			"min": _this.parseNumber(Math.floor(times / 1000 / 60 % 60)),
			"s": _this.parseNumber(Math.floor(times / 1000 % 60))
		}
		cb && cb(surplus);
	};

	/**
	 * 获取今天和后五天的日期和时间和星期
	 * @param {Object} iday
	 */
	Mk.prototype.dateWeekAfter = function(iday) {
		var _this = this;
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + iday);

		var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		var dateWeek = {
			week: dayNames[oDate.getDay()],
			year: oDate.getFullYear(),
			month: _this.parseZero(oDate.getMonth() + 1),
			day: _this.parseZero(oDate.getDate()),
			hour: _this.parseZero(oDate.getHours()),
			minute: _this.parseZero(oDate.getMinutes()),
			second: _this.parseZero(oDate.getSeconds())
		};

		return dateWeek;
	};

	Mk.prototype.guid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};

	window.$m = new Mk();

	/**
	 * Object.assign(a,b)
	 * @param {Object} params {right:10,bottom:10,url:'../gif'}
	 * @ new GoTop()
	 */
	var goTop = function(params) {
		this.extend(this.defaultParams, params);
		this.init(params);
	}

	goTop.prototype = {
		defaultParams: {
			left: 10,
			right: 10,
			imgUrl: ''
		},
		init: function(params, callback) {
			var self = this;

			self.temp(self.defaultParams);

			window.addEventListener('scroll', function() {
				self.toggle();
			}, false);

			var gt = document.querySelector('.m-gotop');
			gt.addEventListener('click', function() {
				self.toTop();
			}, false);
		},

		temp: function(params) {
			var str = '<section class="m-gotop pos-f none" style="right:' + params.right + 'px;bottom:' + params.bottom + 'px;"><span class="m-gotop-img"><img src="' + this.imgUrl + '" alt="" /></span></section>';
			document.body.insertAdjacentHTML('beforeEnd', str);
		},

		toggle: function() {
			var st = document.body.scrollTop || document.documentElement.scrollTop;
			var gt = document.querySelector('.m-gotop');
			if(st > 300) {
				gt.classList.remove('none');
			} else {
				gt.classList.add('none');
			}
		},

		toTop: function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},

		extend: function(a, b) {
			for(var key in b) {
				if(b.hasOwnProperty('key')) {
					a[key] = b[key]
				}
			}

			return a;
		}
	};

	$m.goTop = goTop;
}(window));