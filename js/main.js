const myTextarea = document.querySelector('textarea')
var editor = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true,
  mode: 'css',
  lineWrapping: true,
  foldGutter: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  extraKeys: {
    "Ctrl-Space": "autocomplete",
    'Tab': 'emmetExpandAbbreviation',
    'Esc': 'emmetResetAbbreviation',
    'Enter': 'emmetInsertLineBreak',
    'Cmd-/': 'emmetToggleComment',
    'Ctrl-/': 'emmetToggleComment'
  }
});