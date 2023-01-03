import "./App.css";
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); //a 태그 기본동작을 방해한다!
            //onClick의 함수가 호출 되었을때 헤드의 props로 전달된 onChangeMode가 가리키는 함수를 호출해야한다.
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
//Nav의 내부 안으로 들어와서 topic를 받아주기
const Nav = (props) => {
  //첫번째 파라미터는 props로
  const lis = []; //lis는 배열으로 선언
  for (let i = 0; i < props.topics.length; i++) {
    //map을 주로 쓴다는데 쉽게 for로 먼저 시도해본다.
    let t = props.topics[i]; //t는 props.topics의 i번째 배열
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={"/read/" + t.id} onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(event.target.id);//id값을 얻어내야 한다.
        }}>{t.title}</a>
      </li>
    );
    //push는 배열의 끝에 값을 추가하는 함수
    //li각자가 고유한 키값을 가져야해서 key값은 t의 id값이라고 정해줌 - 자동으로 생성한 태그를 추적할 수 있어야 한다나 뭐라나
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
};
const Article = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
};
function App() {
  //const에 담아두면 후에 바뀌지 않아서 단단한 코드가 된다.
  const topics = [
    //각각의 정보는 여러개니까 배열에 담는다.
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div className="App">
      <Header
        title="웹"
        onChangeMode={() => {
          alert("Header");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          //함수에 파라미터로 id 값이 전달 되었으면 한다.
          alert(id); //그리고 받아온 id 파라미터를 출력한다.
        }}
      />
      {/** 위에서 만든 topic배열을 내부의 prop으로 전달한다. */}
      <Article title="반가워요!" body="안녕하세요~" />
    </div>
  );
}
export default App;
