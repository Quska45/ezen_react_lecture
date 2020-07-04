import React from "react";

// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";

// 직접 정의한 컴포넌트 참조
import Home from "./components/Home";
import About from "./components/About";
import Main from "./components/Main";
import DepartmentGet from "./components/DepartmentGet";
import DepartmentPath from "./components/DepartmentPath";
import Error404 from "./components/Error404";

const App = () => {
    return (
        <div>
            <h1>02-simple-spa</h1>
            {/* ------- 페이지로 링크 적용 ------- */}
            <Link to="/">[Home]</Link>
            <Link to="/about">[About(1)]</Link>
            <Link to="/introduce">[About(2)]</Link>
            <Link to="/main">[Main(SubRoute)]</Link>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
            <Link to="/department_get?deptno=101&msg=hello">[컴퓨터공학과]</Link>
            <Link to="/department_get?deptno=102&msg=world">[멀티미디어학과]</Link>
            {/* PATH 파라미터를 포함하는 링크 구성 */}
            <Link to="/department_path/201/hello">[전자공학과]</Link>
            <Link to="/department_path/202/world">[기계공학과]</Link>
            <hr />

            {/* ------- 페이지로 사용될 컴포넌트들 명시하기 ------- */}
            <Switch>
                {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
                <Route path="/" component={Home} exact={true} />
                {/* 한 페이지에 두 개 이상의 URL을 적용할 경우 배열 형식으로 처리함 */}
                <Route path={["/about", "/introduce"]} component={About} />
                <Route path='/main' component={Main} />
                <Route path="/department_get" component={DepartmentGet} />
                {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
                <Route path='/department_path/:deptno/:msg' component={DepartmentPath} />
                {/* path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응 */}
                <Route component={Error404} />
            </Switch>
        </div>
    );
};

export default App;
