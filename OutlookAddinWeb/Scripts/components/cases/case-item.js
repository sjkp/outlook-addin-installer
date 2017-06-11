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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var CasesItem = (function (_super) {
    __extends(CasesItem, _super);
    function CasesItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CasesItem.prototype.render = function () {
        var item = this.props.case;
        var previewProps = {
            getOverflowDocumentCountText: function (overflowCount) { return overflowCount > 0 ? "+" + overflowCount + " more" : ""; },
            previewImages: item.items.map(function (i) {
                return {
                    name: i.title,
                    url: i.link,
                    imageFit: Image_1.ImageFit.cover,
                    width: 400,
                    height: 196,
                    previewImageSrc: 'dist/document-preview.png',
                    iconSrc: "./images/email.png"
                };
            })
        };
        var cardTitle = item.items.length > 0 ? item.items[0].title : "Click to see more details";
        var documentStyle = {
            marginBottom: "15px"
        };
        var getDate = function (date) {
            return date.getDate() + "/" + date.getMonth() + " - " + date.getFullYear();
        };
        var pStyle = {
            margin: "0 20px"
        };
        return (React.createElement("div", { style: documentStyle },
            React.createElement(DocumentCard_1.DocumentCard, { onClickHref: 'https://www.delegate.dk', accentColor: '#ce4b1f' },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                React.createElement(DocumentCard_1.DocumentCardLocation, { location: item.caseNumber, locationHref: 'http://www.delegate.com', ariaLabel: 'Casenumber' }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: item.title }),
                React.createElement("p", { style: pStyle }, item.description),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: getDate(item.date), people: [
                        { name: 'Anders Andersen', profileImageSrc: 'images/anders.jpg' },
                        { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
                        { name: 'Greta Lundberg', profileImageSrc: 'images/persona-female.png' }
                    ] }),
                React.createElement(DocumentCard_1.DocumentCardActions, { actions: [
                        {
                            icon: 'Share',
                            onClick: function (ev) {
                                console.log('You clicked the share action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'share action'
                        },
                        {
                            icon: 'EditMirrored',
                            onClick: function (ev) {
                                console.log('You clicked the pin action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'pin action'
                        },
                        {
                            icon: 'TemporaryUser',
                            onClick: function (ev) {
                                console.log('You clicked the ringer action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'ringer action'
                        },
                    ], views: 432 }))));
    };
    return CasesItem;
}(React.Component));
exports.default = CasesItem;
