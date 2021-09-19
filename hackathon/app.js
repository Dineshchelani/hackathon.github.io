const firebaseConfig = {
    apiKey: "AIzaSyCLnM6UM27g2BtIwZ1rzDfPgjIeifGZBMs",
    authDomain: "my-first-project-smit.firebaseapp.com",
    projectId: "my-first-project-smit",
    storageBucket: "my-first-project-smit.appspot.com",
    messagingSenderId: "231658534086",
    appId: "1:231658534086:web:1925c831b54587cf2f93c7",
    measurementId: "G-RTKS6ZH3HZ"
};

var level;

function addUser(userName){
    const user = firebase.auth().currentUser;
    firebase.firestore().collection("users").doc(user.uid).set({
        Name: userName,
        Level: 1,
        lastLoggedInAt: new Date()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
function updateUser(level){
    const user = firebase.auth().currentUser;
    console.log(user.uid)
    firebase.firestore().collection("users").doc(user.uid).update({
        Level: level
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            Swal.fire(
                'Good job!',
                'Loged in successfully!',
                'success'
            )
            setTimeout(function () {
                location.href = "./gameScreen.html"
            }, 2000);


        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userName = document.getElementById("Username").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            addUser(userName);
            // Signed in 
            Swal.fire(
                'Good job!',
                'Sign Up successfully!',
                'success'
            )
            setTimeout(function () {
                location.href = "./gameScreen.html"
            }, 2000);
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)

        });
}

function getCU() {
    const user = firebase.auth().currentUser;
    document.getElementById("cUEmail").innerHTML = user.email;
}

function logout() {
    firebase.auth().signOut().then(() => {

        Swal.fire(
            'Good bye!',
            'Loged Out in successfully!',
            'success'
        )
        setTimeout(function () {
            location.href = "./index.html"
        }, 2000);

    }).catch((error) => {
        // An error happened.
    });
}

function level1() {
    for (let i = 0; i < 20; i++) {
        let colors = ["red", "blue", "chartreuse", "brown", "cyan"]
        index = Math.floor(Math.random() * 5);
        const mainDiv = document.getElementById("gameScreen");
        const childDiv = mainDiv.appendChild(document.createElement("button"));
        childDiv.classList.add(colors[index]);
        childDiv.style.backgroundColor = colors[index];
    }
    let poped = 0;
    let lives = 3;
    let color = "red";
    document.addEventListener('mouseover', function (e) {
        className = e.target.className;
        document.getElementById("task").innerHTML = `Pop 3 ${color} balloons`;
        document.getElementById("task").style.color = color;
        document.getElementById("lives").innerHTML = lives;
        if (className === "red" || className === "blue" || className === "chartreuse" || className === "brown" || className === "cyan") {
                       
            if(className === color)
            {
                poped += 1;
                console.log(poped)
                e.target.classList.remove(color);
            }
           
            if(className !== color){
                lives--;
                if(lives == 0){
                    Swal.fire(
                        'Oops..',
                        'Lives ended!',
                        'error'
                    )
                    setTimeout(function () {
                        location.href = "./level_1.html"
                    }, 2000);
                }
            }
            if(poped == 3){
                color = "blue"
            }
            if(poped == 6){
                Swal.fire(
                    'Good job!',
                    'Level 1 Completed!',
                    'success'
                )
                level = 2;
                updateUser(level)
                setTimeout(function () {
                    location.href = "./gameScreen.html"
                }, 2000);
                
            }
            e.target.classList.add("poped");
            e.target.textContent = "POPED!";
        }
    });
}

function level2() {
    for (let i = 0; i < 20; i++) {
        let colors = ["red", "blue", "chartreuse", "brown", "cyan"]
        index = Math.floor(Math.random() * 5);
        const mainDiv = document.getElementById("gameScreen");
        const childDiv = mainDiv.appendChild(document.createElement("button"));
        childDiv.classList.add(colors[index]);
        childDiv.style.backgroundColor = colors[index];
    }
    let poped = 0;
    let lives = 3;
    let color = "red";
    document.addEventListener('mouseover', function (e) {
        className = e.target.className;
        document.getElementById("task").innerHTML = `Pop 3 ${color} balloons`;
        document.getElementById("task").style.color = color;
        document.getElementById("lives").innerHTML = lives;
        if (className === "red" || className === "blue" || className === "chartreuse" || className === "brown" || className === "cyan") {
                       
            if(className === color)
            {
                poped += 1;
                console.log(poped)
                e.target.classList.remove(color);
            }
           
            if(className !== color){
                lives--;
                if(lives == 0){
                    Swal.fire(
                        'Oops..',
                        'Lives ended!',
                        'error'
                    )
                    setTimeout(function () {
                        location.href = "./level_2.html"
                    }, 2000);
                }
            }
            if(poped == 3){
                color = "blue"
            }
            if(poped == 6){
                color = "brown"
            }
            if(poped == 9){
                Swal.fire(
                    'Good job!',
                    'Level 1 Completed!',
                    'success'
                )
                level = 3;
                updateUser(level)
                setTimeout(function () {
                    location.href = "./gameScreen.html"
                }, 2000);
                
            }
            e.target.classList.add("poped");
            e.target.textContent = "POPED!";
        }
    });
}



