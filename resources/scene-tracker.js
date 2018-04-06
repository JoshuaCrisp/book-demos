//Global variables used by various components in the scene

/* variables used to determine if each of the various audio files have been played, so that
they each only get played once */

var tutWelcome = true;
var tutAdd = true;
var tutGeo = true;
var tutMaterial = true;
var tutManipulate = true;
var tutScale = true;
var tutRotate = true;
var tutMove = true;
var tutMove2 = true;
var tutCreated= true;

//Keeps track of how many user-created objects are in the scene

var objectCount = 0;

//Keeps track of the mouse x and y position on the screen

var currentXpos = 0;
var currentYpos = 0;

//Keeps track of where cloned models are added to the scene graph object

var objectXpos = -6.5;
var objectYpos = 4;