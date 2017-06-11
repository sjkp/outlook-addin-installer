import * as React from "react";

export default class BrandLogo extends React.Component<{}, {}> {
    render() {
        const imageStyle: React.CSSProperties = {
            margin: "10px auto",
            display: "block",
            height: "40px"
        }

        return (
            <a href="/">
                <img src="./images/logo.png" style={imageStyle} />
            </a>
        )
    }
}