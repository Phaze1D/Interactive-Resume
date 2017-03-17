

const uiData = {
  navbarItems: [
    {
      icon: 'apple_logo.svg',
      iconAlt: 'Apple Logo',
      subMenu: [
        { title: 'About This Mac' },
        { line: true },
        { title: 'System Preferences...'},
        { title: 'App Store...', pre: '1  update'},
        { line: true },
        { title: 'Recent Items', span: '▶'},
        { line: true },
        { title: 'Force Quit...', span: '⌥⌘⎋'},
        { line: true },
        { title: 'Sleep'},
        { title: 'Restart'},
        { title: 'Shut Down'},
        { line: true },
        { title: 'Log Out David Villarreal...', span: '⇧⌘Q'}
      ]
    },
    {
      title: 'Terminal',
      isMain: true,
      subMenu: [
        {title: 'About Terminal'},
        {line: true},
        {title: 'Preferences...', span: '⌘,'},
        {title: 'Secure Keyboard'},
        {line: true},
        {title: 'Services', span: '▶'},
        {line: true},
        {title: 'Hide Terminal', disabled: true, span: '⌘H'},
        {title: 'Hide Others', span: '⌥⌘H'},
        {title: 'Show All', disabled: true},
        {line: true},
        {title: 'Quit Terminal', span: '⌘Q'}
      ]
    },
    {
      title: 'Shell',
      subMenu: [
        {title: 'New Window', span: '▶'},
        {title: 'New Tab', span: '▶'},
        {title: 'New Command...', span: '⇧⌘N'},
        {title: 'New Remote Connection...', span: '⇧⌘K'},
        {title: 'Import...', span: '⌘O'},
        {line: true},
        {title: 'Close Window', span: '⌘W'},
        {title: 'Close Tab', disabled: true},
        {line: true},
        {title: 'Use Settings As Default'},
        {title: 'Export Settings...'},
        {line: true},
        {title: 'Export Text As...', span: '⌘S'},
        {title: 'Export Selected Text As...', span: '⇧⌘S', disabled: true},
        {line: true},
        {title: 'Show Inspector', span: '⌘I'},
        {title: 'Edit Title', span: '⇧⌘I'},
        {title: 'Edit Background Color', span: '⌥⌘I'},
        {line: true},
        {title: 'Reset', span: '⌥⌘R'},
        {title: 'Hard Reset', span: '⌃⌥⌘R'},
        {line: true},
        {title: 'Print Selection...', span: '⌥⌘P', disabled: true},
        {title: 'Print...', span: '⌘P'}
      ]
    },
    {
      title: 'Edit',
      subMenu: [
        {title: 'Undo', span: '⌘Z'},
        {title: 'Redo', span: '⇧⌘Z'},
        {line: true},
        {title: 'Cut', span: '⌘X'},
        {title: 'Copy', span: '⌘C'},
        {title: 'Copy Special', span: '▶'},
        {title: 'Paste', span: '⌘V'},
        {title: 'Paste Escaped Text', span: '⌃⌘C'},
        {title: 'Select All', span: '⌘A'},
        {title: 'Select Between Marks', span: '⇧⌘C'},
        {line: true},
        {title: 'Marks', span: '▶'},
        {title: 'Bookmarks', span: '▶'},
        {title: 'Navigate', span: '▶'},
        {line: true},
        {title: 'Clear to Previous Mark', span: '⌘L'},
        {title: 'Clear to Previous Bookmark', span: '⌥⌘L', disabled: true},
        {title: 'Clear to Start', span: '⌘K'},
        {line: true},
        {title: 'Clear Scrollback', span: '⌥⌘K'},
        {title: 'Clear Screen', span: '⌃⌘L'},
        {line: true},
        {title: 'Find', span: '▶'},
        {line: true},
        {title: 'Show Colors', span: '⇧⌘C'},
        {line: true},
        {title: 'Use Option as Meta Key', span: '⌥⌘O'},
        {title: 'Num Lock', span: '⌘⌧'},
        {line: true},
        {title: 'Start Dictation', span: 'fn fn'},
        {title: 'Emoji & Symobols', span: '⌃⌘Space'}
      ]
    },
    {
      title: 'View',
      subMenu: [
        {title: 'Show Tab Bar ', span: '⇧⌘T'},
        {title: 'Hide Marks'},
        {line: true},
        {title: 'Show Alternate Screen', span: '⇧⌘⇟'},
        {title: 'Hide Alternate Screen', span: '⇧⌘⇞', disabled: true},
        {line: true},
        {title: 'Allow Mouse Reporting', span: '⌘R'},
        {line: true},
        {title: 'Split Pane', span: '⌘D'},
        {title: 'Close Split Pane', span: '⇧⌘R', disabled: true},
        {line: true},
        {title: 'Default Font Size', span: '⌘O', disabled: true},
        {title: 'Bigger', span: '⌘+'},
        {title: 'Smaller', span: '⌘-'},
        {line: true},
        {title: 'Scroll to Top', span: '⌘↖'},
        {title: 'Scroll to Bottom', span: '⌘↘'},
        {line: true},
        {title: 'Page Up', span: '⌘⇞'},
        {title: 'Page Down', span: '⌘⇟'},
        {line: true},
        {title: 'Line Up', span: '⌥⌘⇞'},
        {title: 'Line Down', span: '⌥⌘⇟'},
        {line: true},
        {title: 'Exit Full Screen', span: '⌃⌘F'}
      ]
    },
    {
      title: 'Window',
      subMenu: [
        {title: 'Minimize', span: '⌘M', disabled: true},
        {title: 'Zoom', span: ''},
        {title: 'Cycle Through Windows', span: '⌘\`'},
        {line: true},
        {title: 'Open Window Group', span: '▶'},
        {title: 'Save Windows as Group', span: ''},
        {line: true},
        {title: 'Return to Default Size', span: '', disabled: true},
        {line: true},
        {title: 'Show Previous Tab', span: '⌃⇧⇥', disabled: true},
        {title: 'Move Tab to New Window', span: '⌃⇥', disabled: true},
        {title: 'Merge All Windows', span: ''},
        {line: true},
        {title: 'Bring All to Front', span: ''},
        {line: true},
        {title: 'david — resume — -bash — Solarized Dark ansi', span: '⌘2'}
      ]
    },
    {
      title: 'Help',
      hasSearch: true,
      subMenu: [
        {title: 'Terminal Help', span: ''},
        {line: true},
        {title: 'Open man Page for Selection', span: '⌃⌘?', disabled: true},
        {title: 'Search man Index Page for Selection', span: '⌃⌥⌘/', disabled: true}
      ]
    }
  ]
}


module.exports.uiData = uiData
