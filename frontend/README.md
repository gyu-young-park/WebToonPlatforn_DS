# 구조 설명
- /data : typescript에 사용할 interface와 type 등을 정해놓았습니다. 그러나, 사용해보면서 너무 불편하여 다음 프로젝트부터는 좀 더 효율적으로 바꿀 생각입니다.  
- /components : pages아래에 있는 page들에 들어가는 요소들 입니다.
- /pages : url에 따라 한 페이지를 담당하는 요소들입니다. 그러나 Next.js처럼 SSR을 쓴 것은 아니라서 실제 page로 보기에는 어렵고 논리적으로만 분류하기 위해 명명하였습니다.  
- /_actions , /reducers : Redux 사용 부분입니다. 로그인 관련 REST API 호출이나 유저의 상태를 저장해두기 위해 사용했습니다.  
- /hoc : high-order-component로 react-router를 이용한 페이지 이동 시에 로그인 세션이 유지되었는 지를 확인하기위해 만들어두었습니다. 해당 hoc폴더의 auth 컴포넌트가 씌인 component 는 자동으로 로그인 세션을 확인하고 페이지를 접근할 수 있는 지, 없는 지를 확인합니다. js로 만든 이유는 이전에 사용하던거 가져왔습니다...  
- App.tsx : 초기 시작점이라고 봐도 무방합니다. 해당 코드에서 react-router를 통한 라우팅 작업을 합니다.  
- setupProxy.js : 개발 상황에서 발생하는 CORS를 없애기 위해 프록시를 사용했습니다. 초기에 nodejs쪽의 CORS를 관리하기위해 사용하였고, flask 서버는 따로 flask-cors 처리를 해주었습니다.  