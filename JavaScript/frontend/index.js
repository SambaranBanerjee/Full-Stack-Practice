document.getElementById("btn-1").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    return alert(`The user ${name} is of age ${age}`);
});