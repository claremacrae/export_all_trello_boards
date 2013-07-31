javascript: if (frames.length > 1) alert('Sorry, frames detected.');
else {
    var wnd = open('', 'lnkswnd', 'width=400,height=500,top=0,left=0,scrollbars,resizable');
    var lnks = document.links;
    var hyperlinks_text = ''; // TODO Add some instructions, and hyperlinks to later sections
    var windows_rename_text =
        '<hr><p>On Windows, put these commands into a .bat file, ' +
        'and run them, to rename the files saved from Trello, so that they ' +
        'are named after the board, instead of a crypic 8-character string</p>' +
        '<pre>';
    var unix_rename_text =
        '<hr><p>On Unix, put these commands into a .bat file, ' +
        'and run them, to rename the files saved from Trello, so that they ' +
        'are named after the board, instead of a crypic 8-character string</p>' +
        '<pre>';
    with(wnd.document) {
        var s = '<html><base target=_blank>\n';
        for (var i = 0; i < lnks.length; i++) {
            // urls look like: https://trello.com/b/nC8QJJoZ/trello-development
            var board_url = lnks[i].href;
            if (board_url.indexOf("https://trello.com/b/") != -1) {
                var components = board_url.split("/");
                var board_slug = components[4];
                var board_id = components[5];

                var jason_url = "https://trello.com/1/boards/" + board_slug + "?fields=all&actions=all&action_fields=all&actions_limit=1000&cards=all&card_fields=all&card_attachments=true&lists=all&list_fields=all&members=all&member_fields=all&checklists=all&checklist_fields=all&organization=false";
                hyperlinks_text += '<li><a href=' + jason_url + '><span onClick=window.close()>' + lnks[i].text + '</span></a></li>\n';
                
                windows_rename_text += "rename " + board_slug + " " + board_id + ".json\n";
                unix_rename_text += "mv " + board_slug + " " + board_id + ".json\n";
            }
        }
        s += hyperlinks_text;
        s += windows_rename_text + '</pre>';
        s += unix_rename_text + '</pre>';
        s += '</html>';
        writeln(s);
        void(close());
    }
}
