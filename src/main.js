import './lib/codemirror.js'
import './lib/mode/css/css.js'
import { SlideTemplate } from './templates.js'
import { b64EncodeUnicode, debounceEvent } from './utils.js'

function format(...args) {
  return b64EncodeUnicode(SlideTemplate(...args))
}

const editorEl = document.querySelector('textarea')
const previewEl = document.querySelector('iframe')
previewEl.setAttribute(
  'src',
  `data:text/html;charset=utf-8;base64,${format(editorEl.value)}`
)

const editor = CodeMirror.fromTextArea(editorEl, {
  lineNumbers: true,
  lineWrapping: true,
  theme: 'dracula',
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  extraKeys: {
    'Ctrl-Space': 'autocomplete',
    Tab: 'emmetExpandAbbreviation',
    Esc: 'emmetResetAbbreviation',
    Enter: 'emmetInsertLineBreak',
    'Cmd-/': 'emmetToggleComment',
    'Ctrl-/': 'emmetToggleComment',
    'Ctrl-Q': function (cm) {
      cm.foldCode(cm.getCursor())
    }
  }
})

editor.on(
  'change',
  debounceEvent(() => {
    previewEl.setAttribute(
      'src',
      `data:text/html;charset=utf-8;base64,${format(editor.getValue())}`
    )
  })
)
