$(function() {
    $.ajax({
        type: "get",
        url: "doc/about.md",
        dataType: "html",
        success: function(res) {
            show(res)
        }
    })

    function show(data) {
        document.getElementById('content').innerHTML = marked.parse(data);
    }
})
