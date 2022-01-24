# 개요

## Docusaurus

- 문서 사이트를 쉽게 만들 수 있는 도구
- [Docusaurus Site](https://docusaurus.io/ko)

### 문서 추가 방법

규칙

- 메뉴의 메인 페이지는 {docId}-intro 로 설정
- 메뉴의 하위 디렉토리는 docs/{docId} 로 설정
- md 링크 이미지 static 경로 위치는 static/img/{docsId}

현재 구성된 페이지

- cs (컴퓨터공학)
  - /docs/cs-intro.md
  - /docs/cs/*.md
- setup (개발환경)
  - /docs/setup-intro.md
  - /docs/setup/*.md

js 설정

```js
// sidebar.js
const sidebars = {
  cs: [
    'cs-intro', // cs-intro.md 파일의 id
    {
      type: 'category', // 카테고리
      label: '컴퓨터공학', // 카테고리 이름
      link: {
        type: 'generated-index',
      },
      collapsed: false,

      // 하위에 소속될 파일의 id 목록
      items: [
        'cs/network',
        'cs/http',
        'cs/https',
      ]
    },
  ],

  setup: [
    'setup-intro', // cs-setup.md 파일의 id
    {
      type: 'category', // 카테고리
      label: '개발환경', // 카테고리 이름
      link: {
        type: 'generated-index',
      },
      collapsed: false,

      // 하위에 소속될 파일의 id 목록
      items: [
        'setup/mysql',
      ]
    },
  ],
}
```

```js
// docusaurus.config.js
const config = {
  // ...
  themeConfig: ({
    // ...
    // 카테고리에 설정할 doc id 및 이름 설정
    items: [
      {
        type: 'doc',
        docId: 'cs-intro',
        position: 'left',
        label: '컴퓨터공학',
      },
      {
        type: 'doc',
        docId: 'setup-intro',
        position: 'left',
        label: '개발환경',
      },
    ],
  })
  // ...
}
```