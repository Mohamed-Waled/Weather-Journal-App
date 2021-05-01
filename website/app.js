/* Global Variables */

const button = document.querySelector('#generate');
let URL = `http://api.openweathermap.org/data/2.5/forecast?zip=`; //the full url of the site that i will req the weather from it 
let apiKey = `&appid=04be82acf27e35069e07d534c40e4f07`; // the api code


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//Make The Button Have Function To Do

button.addEventListener("click", getWeatherData);

//Main Functions

function getWeatherData(press) {
    const zipCode = document.querySelector('#zip').value; //selectting the value of the HTML element with the id "zip"
    const feelings = document.querySelector("#feelings").Value; //selectting the value of the HTML element with the id "feelings"
    getWeather(URL, zipCode, apiKey)

    .then(Data);
};

async function postData(url = "", data = {}) {
    console.log(data);
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data) //Turn The JavaScript Object Into JSON String
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;

    } catch (error) {
        console.log("ERROR!!", error); // To Show The Error To Us In The Console
    };
};

async function updateUI() {
    const request = await fetch("/get");
    try {
        const allData = await request.json();
        document.getElementById("date").innerHTML = `Date: ${allData[0].date}`;
        document.getElementById("temp").innerHTML = `Temperatuer: ${allData[0].temp}`;
        document.getElementById("content").innerHTML = `I Feel: ${allData[0].content}`;
    } catch (error) {
        console.log("ERROR!!", error); // To Show The Error To Us In The Console
    };
};

//Helper Functions

//getWeather Function Is function to GET Web API Data
async function getWeather(URL, zipCode, apiKey) {
    const res = await fetch(URL + zipCode + apiKey);
    try {
        const data = await res.json(); //To change The Data Into Json
        return data;
    } catch (error) {
        console.log("ERROR!!", error); // To Show The Error To Us In The Console
    };
};

function Data(data) {
    console.log(data); // To Add Data To The Post Req
    postData("/post", { date: newDate, temp: data.list[0].main.temp, content: feelings.value })
    updateUI();
};