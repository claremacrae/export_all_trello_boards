javascript: if (frames.length > 1) alert('Sorry, frames detected.');
else {
    var wnd = open('', 'lnkswnd', 'width=400,height=500,top=0,left=0,scrollbars,resizable');
    var lnks = document.links;
    with(wnd.document) {
        var s = '<html><base target=_blank>\n';
        for (var i = 0; i < lnks.length; i++) {
            // urls look like: https://trello.com/board/welcome-board/4e6a8095efa69909ba007382/somename
            var board_url = lnks[i].href;
            if (board_url.indexOf("https://trello.com/board/") != -1) {
                var components = board_url.split("/");

                var http_type = components[0];
                // components[1] is empty
                var trello_domain = components[2];
                var board_keyword = components[3];
                var board_slug = components[4];
                var board_id = components[5];

                var jason_url = http_type + "//";
                jason_url += trello_domain + "/";
                jason_url += board_keyword + "/";
                jason_url += board_id + "/";
                jason_url += board_slug;
                jason_url += ".json";
                s += '<li><a href=' + jason_url + '><span onClick=window.close()>' + lnks[i].text + '</span></a></li>\n';
            }
        }
        s += '</html>';
        writeln(s);
        void(close());
    }
}
