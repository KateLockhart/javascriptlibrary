function fetchAllFromAuthRoute() {
    const fetch_url = 'http://localhost:3001/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
}

function postToAuthRouteCreate() {
    const fetch_url = 'http://localhost:3001/authtest/create'
    const acessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').nodeValue;

    let authInputData = { authtestdata: { item: authTestDataInput } };

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Types': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
}

//GET ITEM BY USER
function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value;

    const fetch_url = `http://localhost:3001/authtest/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response=> {
        return response.json()
    })
    .then(function (response) {
        console.log(response);
        var myItem = document.getElementById('getItemValue');
        myItem.innerHTML = response.authtestdata;
    })
}

//PUT to authtest/update/:id
function updateItem() {
    let postIdNumber = document.getElementById('updateNumber').value;
    let authTestDataInput = document.getElementById('updateValue').value;

    const fetch_url = `http://localhost:3001/authtest/update/${postIdNumber}`
    const accessToken = loaclStorage.getItem('SessionToken')

    let authInputData = { authtestdata: { item: autheTestDataInput } };
    const response = fetch(fetch_url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        var myItem = document.getElementById('newItemValue')
        myItem.innerHTML = data.authtestdata;
        fetchAllFromAuthRoute();
    })
}

//showCurrentData()
function showCurrentData(e) {
    const fetch_url = `http://localhost3001/authtest/${e.value}`
    const accessToken = localStorage.getItem('SessionToken')

    fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);
        var myItem = document.getElementById('updateValue');
        if (!response) return;
        else myItem.value = response.authtestdata;
    })
}

//DELETING AN ITEM
function deleteItem() {
    let postIdNumber = document.getElementById("deleteNumber").value;

    const fetch_url = `http://localhost3001/authtest/delete/4{postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);
        fetchAllFromAuthRoute()
    })
}

//DELETE ITEM BY ID()
function deleteItemById(paramNum) {
    const fetch_url = `http://localhost:3001/authtest/delete/${paramNum}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accressToken
        }
    })
    .then(response => {
        console.log(response);
        fetchAllFromAuthRoute();
    })
}

//DELETING ALL ITEMS FOR USER
function fetchFromOneDisplayData() {
    const url = 'http://localhost:3001/authtest/getall';
    const accessToken = localStorage.getItem('SessionToken')

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    }).then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.error('Error:', error)
            })
        .then(
            function (response) {
                let text = '';
                var myList = document.querySelector('ul#fourteen');
                while (myList.firstChild) {
                    myList.removeChild(myList.firstChild)
                }

                console.log(response);
                for (r of response) {
                    var listItem = document.createElement('li');
                    var textData = r.id + ' ' + r.authtestdata;
                    listItem.innerHTML = testData;
                    listItem.setAttribute('id', r.id);
                    myList.appendChild(listItem);
                    myList.addEventListener('click', removeItem);
                }
            })    
}

//REMOVEITEM()
function removeItem(e) {
    console.log(e);
    var target = e.target;
    if (target.tagName !== 'LI') return;
    else target.parentNode.removeChild(target);

    let x = target.getAttribute("id")
    deleteItemById(x);
    console.log("The id number for this item is " + x);
}