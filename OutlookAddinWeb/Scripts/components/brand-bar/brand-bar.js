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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var brand_logo_1 = require("./brand-logo");
var BrandBar = (function (_super) {
    __extends(BrandBar, _super);
    function BrandBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandBar.prototype.render = function () {
        var style = {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            backgroundColor: "#ccc"
        };
        return (React.createElement("div", { style: style },
            React.createElement(brand_logo_1.default, null)));
    };
    return BrandBar;
}(React.Component));
exports.default = BrandBar;
