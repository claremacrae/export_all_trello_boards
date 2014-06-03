javascript:

    // Maintenance Note:
    //      Only use links to Trello download URLs, so user can download
    //      everything on the page.
    var wnd = open('', 'lnkswnd', 'width=400,height=500,top=0,left=0,scrollbars,resizable');
    var lnks = document.links;
    var preamble_text =
        '<html><base target=_blank>\n' +
        '<h2>Export all Trello Boards</h2>' +
        '<i>By Clare Macrae: see https://github.com/claremacrae/export_all_trello_boards</i>' +
        '<hr>\n';
    var hyperlinks_text =
        '<h2>Instructions for use</h2>' +
        '<ol>' +
        '   <li>Use a download manager to download all the links in this page' +
        '   <li>As a temporary workaround for breaking Trello changes, do one of the following' +
        '   <ul>' +
        '      <li>Follow "Windows instructions" below - or' +
        '      <li>Follow "Unix instructions" below' +
        '   </ul>' +
        '</ol>' +
        '<hr>\n';
    var windows_rename_text =
        '<hr>' +
        '<h2>Windows instructions</h2>' +
        '<p>On Windows, put these commands into a .bat file, ' +
        'and run them, to rename the files saved from Trello, so that they ' +
        'are named after the board, instead of a crypic 8-character string</p>' +
        '<pre>';
    var unix_rename_text =
        '<hr>' +
        '<h2>Unix instructions</h2>' +
        '<p>On Unix, put these commands into a .bat file, ' +
        'and run them, to rename the files saved from Trello, so that they ' +
        'are named after the board, instead of a crypic 8-character string</p>' +
        '<pre>';
    var error_text =
        '<h2>Error - cannot find any links to Trello boards</h2>' +
        '<p>First visit your Trello home page - https://trello.com/ - ' +
        'and then run this bookmarklet</p>';
    with(wnd.document) {
        var s = preamble_text;
        var found_linkx_count = 0;
        for (var i = 0; i < lnks.length; i++) {
            // urls look like: https://trello.com/b/nC8QJJoZ/trello-development
            var board_url = lnks[i].href;
            if (board_url.indexOf("https://trello.com/b/") != -1) {
                found_linkx_count += 1;

                var components = board_url.split("/");
                var board_slug = components[4];
                var board_id = components[5];
                var filename = board_id + ".json\n";

                var jason_url = "https://trello.com/1/boards/" + board_slug + "?fields=all&actions=all&action_fields=all&actions_limit=1000&cards=all&card_fields=all&card_attachments=true&lists=all&list_fields=all&members=all&member_fields=all&checklists=all&checklist_fields=all&organization=false";
                hyperlinks_text += '<li><a href=' + jason_url + ' download=' + filename + '><span onClick=window.close()>' + lnks[i].text + '</span></a></li>\n';
                
                windows_rename_text += "rename " + board_slug + " " + board_id + ".json\n";
                unix_rename_text += "mv " + board_slug + " " + board_id + ".json\n";
            }
        }
        if ( found_linkx_count > 0 )
        {
            s += hyperlinks_text;
            s += windows_rename_text + '</pre>';
            s += unix_rename_text + '</pre>';
        }
        else
        {
            s += error_text;
        }
        s += '</html>';
        writeln(s);
        // Reset the array of links to empty, so that if user has run this in a Trello
        // window, and then runs it later in a non-Trello window, they get a meaningful
        // error
        lnks.length = 0;
        void(close());
    }
