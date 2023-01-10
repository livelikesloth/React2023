import "./App.css";
import { useState } from "react";
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
const Nav = (props) => {
  //Nav의 내부 안으로 들어와서 topic를 받아주기
  //첫번째 파라미터는 props로
  const lis = []; //lis는 배열으로 선언
  for (let i = 0; i < props.topics.length; i++) {
    //map을 주로 쓴다는데 쉽게 for로 먼저 시도해본다.
    let t = props.topics[i]; //t는 props.topics의 i번째 배열
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); //id값을 얻어내야 한다. 숫자로!
          }}
        >
          {t.title}
        </a>
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
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder=" title here" />
        </p>
        <p>
          <textarea name="body" placeholder=" body here"></textarea>
        </p>
        <p>
          <input type="submit" value="CREATE" />
        </p>
      </form>
    </article>
  );
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="UPDATE" />
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4); //id를 따로 관리하기 위해 새로운 값은 4부터 시작
  const [topics, setTopics] = useState([
    //각각의 정보는 여러개니까 배열에 담는다.
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);

  let content = null; //변하게 될 값이니까 let으로 설정한다.
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="반가워요!" body="안녕하세요~" />;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (<>
      <li>
        <a
          href={"/update/" + id}
          onClick={(event) => {
            event.preventDefault();
            setMode("UPDATE");
          }}
        >
          Update
        </a>
      </li>
      <li>
        <input type="button" value="DELETE" onClick={()=>{
          const newTopics=[]
          for (let i = 0; i < topics.length; i++) {
            if (topics[i].id!== id) {
              newTopics.push(topics[i]);
          }
        }        
        setTopics(newTopics);
        setMode("WELCOME");
      }} />
      </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics]; //topics복제
          const updatedTopic = { id: id, title: title, body: body };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
    );
  }
  return (
    <div className="App">
      <Header
        title="웹"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id); //내부 컨포넌트의 글을 클릭해서 id 값이 바뀌면 컨포넌트가 새로 시작되면서 바뀐 id값으로 적용된다.
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          {" "}
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}
export default App;
