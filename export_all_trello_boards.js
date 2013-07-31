javascript: if (frames.length > 1) alert('Sorry, frames detected.');
else {
    var wnd = open('', 'lnkswnd', 'width=400,height=500,top=0,left=0,scrollbars,resizable');
    var lnks = document.links;
    with(wnd.document) {
        var s = '<html><base target=_blank>\n';
        for (var i = 0; i < lnks.length; i++) {
            // urls look like: https://trello.com/b/nC8QJJoZ/trello-development
            var board_url = lnks[i].href;
            if (board_url.indexOf("https://trello.com/b/") != -1) {
                var components = board_url.split("/");
                var board_slug = components[4];
                //var board_id = components[5];

                var jason_url = "https://trello.com/1/boards/" + board_slug + "?fields=all&actions=all&action_fields=all&actions_limit=1000&cards=all&card_fields=all&card_attachments=true&lists=all&list_fields=all&members=all&member_fields=all&checklists=all&checklist_fields=all&organization=false";
                s += '<li><a href=' + jason_url + '><span onClick=window.close()>' + lnks[i].text + '</span></a></li>\n';
            }
        }
        s += '</html>';
        writeln(s);
        void(close());
    }
}
