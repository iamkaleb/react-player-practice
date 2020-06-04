export default {
    getAllNotes() {
        return fetch("http://localhost:8088/timestamps")
            .then(response => response.json())
    },
    post(newNote) {
        return fetch("http://localhost:8088/timestamps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        }).then(response => response.json())
    }
}