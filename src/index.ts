import CodeMirror from 'codemirror'
import 'codemirror/mode/css/css'
import 'codemirror/lib/codemirror.css'

function start() {
  const textarea = document.querySelector('textarea#editor') as HTMLTextAreaElement | null
  const preview = document.querySelector('iframe#preview') as HTMLIFrameElement | null
  if (!textarea || !preview) return

  const editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: 'css',
    lineWrapping: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      'Tab': 'emmetExpandAbbreviation',
      'Esc': 'emmetResetAbbreviation',
      'Enter': 'emmetInsertLineBreak',
      'Cmd-/': 'emmetToggleComment',
      'Ctrl-/': 'emmetToggleComment'
    }
  })
  editor.on("keyup", (editor, event) => {

  })
}

start()
