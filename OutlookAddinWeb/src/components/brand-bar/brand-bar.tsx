import * as React from "react";
import Logo from "./brand-logo";

export default class BrandBar extends React.Component<{}, {}> {
    render() {
        const style: React.CSSProperties = {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            backgroundColor: "#ccc"
        }

        return (
            <div style={style}>
                <Logo />
            </div>
        )
    }
}