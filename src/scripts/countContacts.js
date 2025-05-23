import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts.length;
    }
    catch (error) {
        console.error('Error count contacts', error.message);
    }
};

console.log(await countContacts());
