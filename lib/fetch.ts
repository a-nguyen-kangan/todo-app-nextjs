export async function getProducts() {
    return await fetch("https://665e45471e9017dc16ef83fe.mockapi.io/api/Products")
        .then((res) => {if (res.ok) { return res.json()}});
}

export async function fetchAllTodos() {
    const data = await fetch("https://665e45471e9017dc16ef83fe.mockapi.io/api/Todo");
    
    if (data.ok) {
        const todos = await data.json();
        return todos;
    } 
        
    return null;
}