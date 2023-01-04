vue 프로젝트 생성
--

1. Vue 프로젝트를 생성할 루트 폴더 만들기 : 윈도우 탐색기에서 폴더 생성( 강의에서는 폴더명을 'vue-project'/course_Youtube-vue라고 함)

2. vscode 열기

3. File > Open 에서 1번에서 생성한 폴더 열기

4. 메뉴에서 View(보기) > 터미널 열기

5. Vue 프로젝트 생성 명령어 입력 : vue create [프로젝트명]

6. manually select features 선택

7. 선택 항목 중 Router, Vuex 추가 선택 (선택할 항목에서 '스페이스바' 입력)

8. 3.x 선택

9. ESLint + Standard config 선택

10. Lint on save 선택

12. in package.json 선택

13. Preset: y 선택

14. Preset 이름 작성

----------------------------

eslint, prettier 설정
--

1. .prettierrc 파일 생성

2. 해당 파일에 아래 내용 추가

<pre>
    {
        "semi": false,
        "bracketSpacing" : true,
        "singleQuote": true,
        "useTabs": false,
        "trailingComma": "none",
        "printWidth": 80
    }
</pre>

<pre>
    * semi 
    세미콜론은 안쓰겠다.

    * singleQoute 
    문자열에 쌍따옴표가 아니라 홑따옴표를 쓰겠다.

    * useTabs
    탭을 안쓰겠다.

    * printWidth
    한 눈에 들어오는 문자열의 길이를 x로 잡겠다.
</pre>

3. package.json 파일 열기

4. 

<pre>
    "rules: {"space-before-function-paren": "off"} "
</pre>

    > space-before-function-paren 
    함수를 정의할때 함수명과 그 뒤 () 괄호 간의 간격이 1칸이 존재해야하는 기본 규칙을 끄겠다.


    ex) 
    function myFunction () {

    }

가 아니라

        function myFunction(){

        }
    
이 된다.


--------------------------------

vue 프로젝트 폴더 및 파일 구조 이해하기
--

- node_modules: 설치된 node 모듈이 위치해 있는 폴더. npm install 명령어를 통해 설치한 모듈이 위치하는 곳입니다.

-public: index.html 파일이 위치하는 곳 (정적 파일이 위치하는 곳)

- src: 구현되는 vue 컴포넌트 파일이 위치하는 곳

- src > assets: css,image 등 파일이 위치하는 곳

- src > components: Vue 컴포넌트 중 재사용을 위해서 구현된 컴포넌트가 위치하는 곳

- src > router: 라우팅을 정의하는 파일이 위치하는 곳

- src > store: vuex의 상태저장소인 store 파일이 위치하는 곳

- src > views: 웹 어플리케이션에서 각 화면, 즉 메뉴에 대응되는 화면에 해당하는 Vue 컴포넌트가 위치하는 곳

- App.vue: 최상위 Vue 컴포넌트

- package.json: vue프로젝트에 대한 정보 및 사용하고 있는 모듈 등에 대한 정보를 관리하고, Vue 프로젝트를 실행할 수 있는 스크립트가 정의된 파일



----------------------------------------------------------------------

Vue 프로젝트 실행 구조 이해하기
--

Vue 프로젝트 실행 -> main.js 실행 -> App.vue 가져오기 -> public/index.html에 마운트

1. Vue 프로젝트가 실행(npm run serve)이 되면 가장 먼저 main.js를 실행합니다.

2. main.js에서 App.vue 컴포넌트로 Vue 앱을 생성합니다.

3. main.js 라우터(router), 상태관리(store), 믹스인(mixins), 전역 모듈 등을 로드합니다.

4. App.vue 에서 네비게이션 처리 및 라우터에 해당하는 컴포넌트를 실행하게 됩니다.

5. App.vue 컴포넌트가 public 폴더의 index.html의 html 요소 중 id가 "app"인 요소에 마운트 됩니다.



---------------------------------------------------------------------------


Vue 컴포넌트 구조 이해하기

Vue 컴포넌트는 HTML 구현 영역, JS 구현 영역, CSS 구현 영역이 명확하게 구분이 되어 있어서 프로그램 코드를 언어에 맞게 구분하여 관리할 수 있다는 장점을 가지고 잇습니다.

-- <Template> 태그 : HTML 정의
-- <Script> 태그 : JS 코드 정의
-- <style scoped> : CSS 정의



============================================================================================================================================

Vue User Snippets 등록
--

1. File > Preference > User Snippets 메뉴 이동

2. 검색창에 vue 입력 -> vue 선택

3. 아래코드 입력

[ 
	"Generate Basic Vue Code" : {
		"prefix": "vue-start",
		"body": [
			"<template>\n\t<div></div>\n</template>\n\n<script>\nexport default {\n\tcomponents: {},\n\tdata() {\n\t\treturn {\n\t\t\tsampleData: ''\n\t\t}\n\t},\n\tsetup() {},\n\tcreated() {},\n\tmounted() {},\n\tunmounted() {},\n\tmethods: {}\n}\n</script>\n\n<style scoped>\n\n</style>\n"
		],
		"description": "Generate Basic Vue Code"
	}
]










============================================================================================================================================

 webpackChunkName 여러 View에 동일하게 가져갈 경우 진입하는 순간 혹은 prefetch일 경우 사이트 진입시에 해당 View를 로드해온다. 연관성있는 화면의 경우 동일하게 해주면 유용할 수 있음.