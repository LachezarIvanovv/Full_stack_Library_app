import { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { oktaConfig } from "../../lib/oktaConfig";

const OktaSignInWidget = ({ onSuccsess, onError}) => {
    const widgetRef = useRef();

    useEffect(() => {
        if(!widgetRef.current){
            return false;
        }

        const widget = new OktaSignIn(oktaConfig);

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccsess).catch(onError);

        return () => widget.remove();
    },[onSuccsess, onError]);

    return (
        <div className="container mt-5 mb-5">
            <div ref={widget}></div>
        </div>
    );
}

export default OktaSignInWidget;