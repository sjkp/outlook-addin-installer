"use strict";
exports.__esModule = true;
var ContactModel = (function () {
    function ContactModel(firstName, lastName, jobTitle, phone, email, items) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.email = email;
        this.items = items;
    }
    return ContactModel;
}());
exports["default"] = ContactModel;
