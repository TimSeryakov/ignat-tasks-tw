import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import {ToDoBoard} from "./ToDoBoard/ToDoBoard";
import {Chat} from "./Chat/Chat";
import {Hello} from "./Hello/Hello";
import {CustomElementsDemo} from "./CustomElementsDemo/CustomElementsDemo";
import HW4 from "./pages/HW4";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
  TODOLIST: "/todo",
  CHAT: "/chat",
  HELLO: "/hello",
  CUSTOM_ELEMENTS_DEMO: "/custom-elements-demo",
  HW4: "/HW4",
  GREETINGS: "/greetings"
}

function Routes() {
  return (
      <HashRouter>
        <div>
          {/*Switch выбирает первый подходящий роут*/}
          <Switch>

            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>{/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}{/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}

            <Route path={PATH.TODOLIST} render={() => <ToDoBoard/>}/>
            <Route path={PATH.CHAT} render={() => <Chat/>}/>
            <Route path={PATH.HELLO} render={() => <Hello/>}/>
            <Route path={PATH.CUSTOM_ELEMENTS_DEMO} render={() => <CustomElementsDemo/>}/>
            <Route path={PATH.HW4} render={() => <HW4/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

            <Route render={() => <Error404/>}/> {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

          </Switch>
        </div>
      </HashRouter>
  );
}

export default Routes;

// - установите в свой проект react-router-dom и используя <HashRouter> вместо <BrowserRouter> (так как он лучше работает на gh-pages) сделайте 3 страницы:
//     1) preJunior 2) Junior 3) Junior+
// (подсмотрите в соцсети "как" или смело обращайтесь на "хэлп" по любым вопросам)
// - сделайте выезжающий сбоку/сверху/снизу (на выбор/или все сразу для практики) навбар со списком страниц, обёрнутых в <NavLink> со ссылками на соответствующие страницы, текущую страницу в списке подсвечивать
// - разместите на первой странице результат моих домашек № 1-4
// - не забудьте сделать deploy)