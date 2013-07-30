javascript: if (frames.length > 1) alert('Sorry, frames detected.');
else {
    var wnd = open('', 'lnkswnd', 'width=400,height=500,top=0,left=0,scrollbars,resizable');
    var lnks = document.links;
    with(wnd.document) {
        var s = '<html><base target=_blank>\n';
        for (var i = 0; i < lnks.length; i++) {
            var board_url = lnks[i].href;
            if (board_url.indexOf("https://trello.com/board/") != -1) {
                var components = board_url.split("/");
                var jason_url = components[0] + "//";
                jason_url += components[2] + "/";
                jason_url += components[3] + "/";
                jason_url += components[5] + "/";
                jason_url += components[4];
                jason_url += ".json";
                s += '<li><a href=' + jason_url + '><span onClick=window.close()>' + lnks[i].text + '</span></a></li>\n';
            }
        }
        s += '</html>';
        writeln(s);
        void(close());
    }
}
