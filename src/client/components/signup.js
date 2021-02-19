import {useState, React} from "react";
const signup = require("../../server/controllers/account/lib");
function SignUp() {
    const [inputSignUpEmail, setInputSignUpEmail] = useState(""); // '' is the initial state value
    const [inputSignUpPassword, setInputSignUpPassword] = useState("");
    return (
        <div>
            <form className={"box"}>
                <div className={"field"}>
                    <label className={"label"}>{"Email subscription"}</label>
                    <div className={"control"}>
                        <input
                            value={inputSignUpEmail}
                            onInput={e => setInputSignUpEmail(e.target.value)}
                            className={"input"}
                            type={"email"}
                            placeholder={"e.g. john.doe@example.com"}
                        />
                    </div>
                </div>

                <div className={"field"}>
                    <label className={"label"}>{"Password"}</label>
                    <div className={"control"}>
                        <input
                            value={inputSignUpPassword}
                            onInput={e =>
                                setInputSignUpPassword(e.target.value)
                            }
                            className={"input"}
                            type={"password"}
                            placeholder={"********"}
                        />
                    </div>
                </div>

                <button
                    type={"submit"}
                    className={"button is-primary"}
                    onClick={signup}>
                    {"Sign up"}
                </button>
            </form>
        </div>
    );
}
export {SignUp};
