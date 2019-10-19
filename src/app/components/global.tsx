import { createGlobalStyle } from 'styled-components'

const GlobalComponent = createGlobalStyle`
  html {
    background: #fff;
  }

  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  }
`

export default GlobalComponent
