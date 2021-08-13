/* eslint-disable import/no-unresolved */
// 引入 bootstrap 的 CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// 引入主題(可設定類似 mixin 的全域變數供使用
//  import { ThemeProvider } from "styled-components";
import BoardApp from "./components/Board/App";
// week21
import TodosApp from "./components/Todos/App";
import GobangApp from "./components/Gobang/App";
import FormApp from "./components/Form/App";
// week22
import BlogApp from "./components/Blog/App";
// week23
import TodosRedux from "./components/Todos-redux/App";
import TodoStore from "./components/Todos-redux/redux/store";
// week24
import BlogAppRedux from "./components/Blog-redux/App";
import { Provider } from "react-redux";
import blogStore from "./components/Blog-redux/redux/store";

// <React.StrictMode> 嚴格模式可能會造成偵錯問題，可先取消
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/BoardApp">BoardApp</Link>
        </li>
        <li>
          <Link to="/TodosApp">TodosApp</Link>
        </li>
        <li>
          <Link to="/GobangApp">GobangApp</Link>
        </li>
        <li>
          <Link to="/FormApp">FormApp</Link>
        </li>
        <li>
          <NavLink
            to="/BlogApp"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            BlogApp
          </NavLink>
        </li>
      </ul>
    </div>
    <Switch>
      {/* blog 下層會再使用 router ，此層不可設為 exact，因由上往下逐層篩選 */}
      <Route exact path="/">
        <h1>I am Home</h1>
      </Route>
      <Route exact path="/BoardApp">
        <BoardApp />
      </Route>
      <Route exact path="/TodosApp">
        <TodosApp />
      </Route>
      <Route exact path="/GobangApp">
        <GobangApp />
      </Route>
      <Route exact path="/FormApp">
        <FormApp />
      </Route>
      <Route path="/BlogApp">
        <BlogApp />
      </Route>
      
      <Route exact path="/TodosRedux">
        <Provider store={TodoStore}>
          <TodosRedux />
        </Provider>
      </Route>
      <Route path="/BlogAppRedux">
        <Provider store={blogStore}>
          <BlogAppRedux />
        </Provider>
      </Route>

    </Switch>
  </Router>,
  document.getElementById("root")
);
