// import './App.css'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import Editor from './components/Editor'

function App() {

  return (
    <>
    <Editor
    displayName='HTML'
    language={html()}
    // value={htmlCode}
    // onChange={setHtmlCode}
    />
    <Editor
    displayName='CSS'
    language={css()}
    // value={cssCode}
    // onChange={setCssCode}
    />
    <Editor
    displayName='JS'
    language={javascript()}
    // value={jsCode}
    // onChange={setJsCode}
    />
    <div className='pane top-pane'>
      <div className='pane'>
        <iframe 
        title='output'
        sandbox='allow-scripts'
        style={{border: 'none'}}
        width='100%'
        height='100%'/>
      </div>
    </div>

    </>
  )
}

export default App
