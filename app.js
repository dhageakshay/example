(function() {
    var config = {
    apiKey: "AIzaSyBKvlspjMabahuUMXIWQhCavwy-sOM1Y2o",
    authDomain: "studentattendance-e0c97.firebaseapp.com",
    databaseURL: "https://studentattendance-e0c97.firebaseio.com",
    storageBucket: "studentattendance-e0c97.appspot.com",
};

firebase.initializeApp(config);
var obj = {};

var preObject = document.getElementById('object');
var preObject1 = document.getElementById('object1');

var dbRefObject = firebase.database().ref().child('users');


// dbRefObject.on('value', snap => console.log(snap.val()));
var tr = document.createElement('tr'); 
dbRefObject.on('value', snap => {
    obj = snap.val();
    // preObject.innerHTML = JSON.stringify(snap.val(), null, 3);
    // console.log(obj);
    var count = 0;
    for(var key in obj){
        var tr = document.createElement('tr'); 
        count++;
        preObject.innerHTML = count;
        // console.log(key, obj[key]);
        tr.innerHTML = `
        <td>${key}</td>
        <td>${obj[key]}</td>`;
        preObject1.appendChild(tr);     
    }
    // console.log(demo);
    
});


}());