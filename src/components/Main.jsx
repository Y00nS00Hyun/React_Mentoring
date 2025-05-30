
import "./Main.css"

function Main() {
    const user = {
        name: "윤수현",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

};

export default Main


