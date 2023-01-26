var appid = '20230105001520691';
var key = 'DISgv6uaAZmDwNnSAdn6';
var salt = (new Date).getTime();
var query = $('#search-input').val(); //需要获取数据
var from = 'auto'; //需要获取数据
var to = 'auto'; //需要获取数据
var str1 = appid + query + salt + key;
var sign = MD5(str1);
var headLen = '@trans'.length + 1;
query = query.substring(headLen, query.length);
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
        localStorage.setItem('bd_tsr_json', data);
        alert(data);
    }
});
