var appid = '20230105001520691';
var key = '12345678';
var salt = (new Date).getTime();
var query = 'apple'; //需要获取数据
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en'; //需要获取数据
var to = 'zh'; //需要获取数据
var str1 = appid + query + salt + key;
var sign = MD5(str1);
$.ajax({
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'get',
    dataType: 'jsonp',
    data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    },
    success: function(data) {
        console.log(data);
        //localStorage.setItem('bd_tsr_json', data);
    }
});
