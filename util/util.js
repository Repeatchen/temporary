
var util = (function(){
    // 判断类型
    function isNumber(value) {
        return Object.prototype.toString.call(value) == "[object Number]";
    }

    function isString(value) {
        return Object.prototype.toString.call(value) == "[object String]";
    }

    function isObject(value) {
        return Object.prototype.toString.call(value) == "[object Object]";
    }

    function isFunction(value) {
        return Object.prototype.toString.call(value) == "[object Function]";
    }

    function isArray(value) {
        return Object.prototype.toString.call(value) == "[object Array]";
    }

    function isBoolean(value) {
        return Object.prototype.toString.call(value) == "[object Boolean]";
    }

    // 获取url参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
    // 判断是否有值
    function isUndefined(a){
        return (a==undefined || a===undefined || a.toString()=='undefined' || typeof(a)=='undefined' || a==null)
    }
    // 判断是否为空
    function isBlank(a){
        if(isUndefined(a)){//未定义
            return true;
        }else if(a.toString()==""){//空
            return true;
        }else if(isObject(a)){
            return jQuery.isEmptyObject(a);//空对象
        }else{
            return false;
        }
    }

    // 判断是否为小数
    function isFloat(c){
        var r= /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
        return r.test(c);
    }
    // 获取localStorage
    function getLocalstorage(parms){
        if(IsBlank(localStorage.getItem(parms)))
            return null;
        else
            return JSON.parse(localStorage.getItem(parms));
    }

    //设置localStorage
    function setLocalstorage(parms,data){
        localStorage.setItem(parms,JSON.stringify(data));
    }

    // 移除localStorage
    function removeLocalstorage(parms){
        localStorage.removeItem(parms);
    }
    // 获取Cookie
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    
        if (arr = document.cookie.match(reg)) {
            return (arr[2]);
        }
        else {
            return null;
        }
    };

    // 设置Cookie
    function setCookie (name,str){
        document.cookie=name+"="+escape(str)+";";
    }

    //删除Cookie
    function delCookie(name){
        setCookie(name,'')
    }

    //判断是pc端还是移动端
    function isMobile() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
            return true;
        else
            return false;
    }
    //判断是否是安卓
    function isAndroid(){
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        return isAndroid;
    }
    //判断是否是IOS
    function isIos(){
        var u = navigator.userAgent, app = navigator.appVersion;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isiOS;
    }
    //判断是否是微信浏览器的函数
    function isWeiXin(){
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }


     /*6位随机数*/
     function getTraceId () {
        var trace_id = "";
        var all = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
            "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var size = 6;
        for (var a = 0;a < size; a++) {
            var s = parseInt(Math.random() * all.length);
            trace_id += all[s];
        }
        return trace_id;
    };
    
    /*日期/转换成-*/
    function getMonthDay(time){
        var date = new Date(time.replaceAll('-', '/'));
        var times = (date.getMonth() + 1) + '-' + date.getDate() ;
        return times;
    };

    //本地吐司方法
    function toaster(msg) {
        var str = "<div class='toast-container' style='display:none'> <div class='toast'>" + msg + "</div></div>";
        $('body').append(str);
        $('.toast-container').stop().fadeIn(100).delay(1500).fadeOut(400); //fade out after 3 seconds
        setTimeout(function () {
            $('.toast-container').remove();
        }, 3000);
    }

    // loading  css在util.css
    function createLoading() {
        var box = document.createElement('div');
        var img = document.createElement('img');
        var text = document.createElement('div');
        img.src = 'data:image/gif;base64,R0lGODlhRgBGAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RThDQTZBRjI0RTgxMTFFN0EwMDlCRTJERjNFQUQyNTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RThDQTZBRjM0RTgxMTFFN0EwMDlCRTJERjNFQUQyNTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOENBNkFGMDRFODExMUU3QTAwOUJFMkRGM0VBRDI1NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOENBNkFGMTRFODExMUU3QTAwOUJFMkRGM0VBRDI1NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUAAAEALAAAAABGAEYAAALDjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrYuC8TAu8kzndl4Lu+Y7kvEHsDGUFVcJBVLku2o7DGetxN1KmU+kVctFEGtosJesYEM60LQLTVxS4Ovm+3s+xvM6/f8/t39w9YRRjdBaKdxiEehuBh4yKPo0Zgo6XeJmam56VNY1ukpFGol9+c4BhiwKJjCqor4WkoqG+voOnJLe6YrkroLe8DbC/x7WrwnjJl8uezX7EysOcpJXW19jZ2tvc3d7f0NHlAAACH5BAUAAAEALBgAIgABAAEAAAICRAEAIfkECQAAAQAsLwAgAAEAAQAAAgJMAQAh+QQFAAABACwAAAAARgBGAAACTIyPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LK5VgAAIfkEBQAAAQAsAAAAAAEAAQAAAgJMAQAh+QQFAAABACwSABUAHgAMAAACEkSOqcvtD6OctNqLs968+88ABQAh+QQJAAABACwYACIAAQABAAACAkwBACH5BAUAAAEALAAAAABGAEYAAAJMjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksrlWAAA7';
        box.classList.add('loading-box');
        img.classList.add('loading-img');
        text.classList.add('loading-text');
        text.innerHTML = '加载中…';
        box.appendChild(img);
        box.appendChild(text);
        box.style.display = 'none';
        document.body.appendChild(box);
        return box;
    }
    var toggleLoading = (function () {
        var load = createLoading();
        return function (flag) {
            var status = flag ? 'block' : 'none';
            load.style.display = status;
        }
    })();

    return {
        isNumber:isNumber,
        isString:isString,
        isObject:isObject,
        isFunction:isFunction,
        isArray:isArray,
        isBoolean:isBoolean,
        getUrlParam:getUrlParam,
        isUndefined:isUndefined,
        isBlank:isBlank,
        getLocalstorage:getLocalstorage,
        setLocalstorage:setLocalstorage,
        removeLocalstorage:removeLocalstorage,
        isFloat:isFloat,
        getTraceId:getTraceId,
        getMonthDay:getMonthDay,
        toaster:toaster,
        toggleLoading:toggleLoading,
        getCookie:getCookie,
        setCookie:setCookie,
        delCookie:delCookie,
        isMobile:isMobile,
        isAndroid:isAndroid,
        isIos:isIos,
        isWeiXin:isWeiXin
        
        
    }

})();

/**
 * 返回指定format的string
 * format eg:'yyyy-MM-dd hh:mm:ss'
 * new Date().format('yyyy-MM-dd');
 **/
Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};