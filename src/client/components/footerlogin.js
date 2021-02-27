/* botanists/mwenbwa
 *
 * /src/client/components/footerlogin.js - Hello Component
 *
 * started at 11/02/2021
 */

import * as React from "react";
import "../assets/css/map.css";

const FooterBarLogin = () => (
    <footer
        className={
            "bottombarlg footer has-background-primary is-align-items-center is-justify-content-center"
        }>
        <div className={"bottombarlg content has-text-centered"}>
            <p className={"foolg is-size-6"}>
                {"Powered by "}
                <a href={"https://github.com/the-botanists/mwenbwa"}>
                    {"the-botanists"}
                </a>
            </p>
        </div>
    </footer>
);

export default FooterBarLogin;
