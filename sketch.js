var londonUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0'; 

var newYorkUrl='http://api.openweathermap.org/data/2.5/weather?id=5128581&appid=2de143494c0b295cca9337e1e96b00e0';

var dubaiUrl='http://api.openweathermap.org/data/2.5/weather?id=292223&appid=2de143494c0b295cca9337e1e96b00e0';

var singaporeUrl='http://api.openweathermap.org/data/2.5/weather?id=1880251&appid=2de143494c0b295cca9337e1e96b00e0';

var telavivUrl = 'http://api.openweathermap.org/data/2.5/weather?id=293397&appid=2de143494c0b295cca9337e1e96b00e0';

var moscowUrl = 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=2de143494c0b295cca9337e1e96b00e0';

var sydneyUrl='http://api.openweathermap.org/data/2.5/weather?id=2147714&appid=2de143494c0b295cca9337e1e96b00e0';

var capetownUrl = 'http://api.openweathermap.org/data/2.5/weather?id=3369157&appid=2de143494c0b295cca9337e1e96b00e0';

var x = 180;
var y = 90;

function preload(){
	getRats();
}

function setup(){

    createCanvas(720,720);
    background(255);
	
}

function draw(){

    
    /*
    push();
    translate(180,90);
    fill(255,0,0);
    ellipse(london.coord.lat, london.coord.lon,20,20);
     fill(0,0,255);
    ellipse(newYork.coord.lat, newYork.coord.lon,20,20);
    pop();
    */
 

push();

   translate(180,90);
    fill(255,0,0);//red
    ellipse(london.coord.lon*2,x-(london.coord.lat*4), 20, 20);
    //console.log(capetown.coord.lon*2+180);//used to figure out placement of ellipse after translate and scaling
    //console.log(x-(capetown.coord.lat*4)+90);//same purpose
    fill(0,255,0);//green
    ellipse(newYork.coord.lon*2, x-(newYork.coord.lat*4), 20, 20);
    fill(100,150,255);//light blue
    ellipse(dubai.coord.lon*2, x-(dubai.coord.lat*4), 20, 20);
    fill(0,80,50);//dark green
    ellipse(singapore.coord.lon*2, x-(singapore.coord.lat*4), 20, 20);
    fill(180,0,250);//purple
    ellipse(telaviv.coord.lon*2, x-(telaviv.coord.lat*4), 20, 20);
    fill(0,50,200);//blue
    ellipse(moscow.coord.lon*2, x-(moscow.coord.lat*4), 20, 20);
    fill(255,255,0);//yellow
    ellipse(sydney.coord.lon*2, x-(sydney.coord.lat*4), 20, 20);
    fill(255,70,150);//pink
    ellipse(capetown.coord.lon*2,x-(capetown.coord.lat*4), 20, 20);
    pop();
    /*
    if(mouseX>169.74 && mouseX<189.74 && mouseX>53.96 && mouseX<73.96){
    fill(0);
    */
    
    //printing name of city on visual representation
    fill(0);
    textFont("helvetica", 20);
    text(london.name,169.74,53.96);
    text(newYork.name,31.90,107.16);
    text(dubai.name,290.6,168.95);
    text(singapore.name,387.6,264.52);
    text(telaviv.name,249.96,141.6);
    text(moscow.name,255.24,47);
    text(sydney.name,482.42,405.48);
    text(capetown.name,216.84,405.72);
   
   
  //else{
    //  fill(255);
    //textFont("helvetica", 20);
  //  text("london.sys.name",169.74,53.96);  
  //}
    
    
   

}

function mousePressed(){


}
    
    


function getRats(){

	 // this will download the city's weather info
  london = loadJSON(londonUrl);//, londonDownloaded); // asynchronous API call
     newYork = loadJSON(newYorkUrl);//, newYorkDownloaded);
     dubai = loadJSON(dubaiUrl);//, dubaiDownloaded);
     singapore=loadJSON(singaporeUrl);
     telaviv=loadJSON(telavivUrl);
     moscow = loadJSON(moscowUrl);
     sydney = loadJSON(sydneyUrl);
     capetown= loadJSON(capetownUrl);

}

function londonbox(a,b){
    fill(255,0,0);
    rect(a,b, 40,40);


}

/*
function londonDownloaded(){
	// this will run once the city open data is grabbed
    console.log(london.main.temp);
    console.log(london.coord.lon);
    console.log(london.coord.lat);
  
}
function newYorkDownloaded(){
    console.log(newYork.main.temp);
    console.log(newYork.coord.lon);
    console.log(newYork.coord.lat);
    
}

function dubaiDownloaded(){
    console.log(dubai.main.temp);
    console.log(dubai.coord.lon);
    console.log(dubai.coord.lat);
    
}
*/



