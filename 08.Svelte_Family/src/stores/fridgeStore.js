import { writable } from "svelte/store";  //der findes to typer stores readable og writable

function fridgeMessagesCustomStore() {
    const { subscribe, update, set } = writable(["Write a fridge message"]);

    return {
        subscribe,
        update,
        set,
        wipe: () => set(["Write a fridge message"])
    }
}

export const fridgeMessages = fridgeMessagesCustomStore();

// store har set, subscribe og update hvis der er writeable, men readable har kun subscribe

//stores værdier er i memory så ved refresh mistes disse