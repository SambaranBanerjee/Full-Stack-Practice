document.getElementById("btn-1").addEventListener("click", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value;
    const ageInput = document.getElementById('age');
    const ageValue = Number(ageInput.value);

    const postData = {
        name: nameValue,
        age: ageValue
    };

    if (nameValue.trim() === '' || ageValue === '') {
        alert("Please enter all input values");
        return;
    }
    sendPosts(postData);
    
});

async function sendPosts(postData) {
    try {
        const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Post created: ', data);
        alert('Data successfully submitted!'); 

    } catch (error) {
        console.error('Error in posting data: ', error);
        alert('Failed to connect to the server or post data.');
    }
}