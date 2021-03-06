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
var CommandBar_1 = require("office-ui-fabric-react/lib/CommandBar");
var command_bar_items_1 = require("./command-bar-items");
var CommandBarNonFocusableItemsExample = (function (_super) {
    __extends(CommandBarNonFocusableItemsExample, _super);
    function CommandBarNonFocusableItemsExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarNonFocusableItemsExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(CommandBar_1.CommandBar, { isSearchBoxVisible: false, items: command_bar_items_1.items })));
    };
    return CommandBarNonFocusableItemsExample;
}(React.Component));
exports["default"] = CommandBarNonFocusableItemsExample;
//   farItems={ farItemsNonFocusable } 
