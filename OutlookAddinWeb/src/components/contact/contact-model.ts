import ContactEvent from "./contact-event";

export default class ContactModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public jobTitle: string,
        public phone: string,
        public email: string,
        public items: ContactEvent[]
    ) {}
}