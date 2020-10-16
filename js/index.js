window.onload = async () => {
    var firebaseConfig = {
        apiKey: "AIzaSyAPoxjXZ3oKRnmP0JUWZ8a7Hc-yEQkkGyo",
        authDomain: "coding-language-for-beginner.firebaseapp.com",
        databaseURL: "https://coding-language-for-beginner.firebaseio.com",
        projectId: "coding-language-for-beginner",
        storageBucket: "coding-language-for-beginner.appspot.com",
        messagingSenderId: "695408446128",
        appId: "1:695408446128:web:65e29ac3249cbf57178975"
    };
    firebase.initializeApp(firebaseConfig);
    await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            model.currentUser = {
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
            };
            if (user.emailVerified) {
                view.setActiveScreen('userHomePage');
                //firebase.auth().signOut();
            } else {
                alert("Please verify your email");
                firebase.auth().signOut();
                view.setActiveScreen("loginPage");
            }
        } else {
            view.setActiveScreen("homePage")
        }
    })
}

const getManyDocument = (response) => {
    const listData = []
    for(const doc of response.docs) {
      listData.push(getOneDocument(doc))
    }
    return listData
}
  
const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}