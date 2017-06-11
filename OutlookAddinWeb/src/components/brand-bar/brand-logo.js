"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var BrandLogo = (function (_super) {
    __extends(BrandLogo, _super);
    function BrandLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandLogo.prototype.render = function () {
        var imageStyle = {
            margin: "10px auto",
            display: "block",
            height: "40px"
        };
        return (React.createElement("a", { href: "/" },
            React.createElement("img", { src: "./images/logo.png", style: imageStyle })));
    };
    return BrandLogo;
}(React.Component));
exports["default"] = BrandLogo;
