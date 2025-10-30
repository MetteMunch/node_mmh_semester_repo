import { writable } from "svelte/store";  //der findes to typer stores readable

function fridgeMessagesCustomStore() {
    const { subscribe, update, set } = writable(["Write a fridge message"]);

    return {
        subscribe,
        update,
        set,
        wipe: () => (["write a fetch"])
    }
}

export const fridgeMessages = writable(["write a message"]);

// store har set, subscribe og update hvis der er writeable, men readable har kun subscribe

//stores værdier er i memory så ved refresh mistes disse