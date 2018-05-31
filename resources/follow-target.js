AFRAME.registerComponent('follow-target',{

schema:{
    target: {type: 'selector'},                // The object you want the camera to follow
    speed: {type: 'number'},                   // The speed at which you want the camera to follow the target
    active: {type: 'boolean', default: true}   // Whether the camera is following the target
},

init: function(){
  var el = this.el.sceneEl;
  var data = this.data;
   this.offset = 0;

   var makeActive =  function(){data.active = true;}
   var makeInactive =  function(){data.active = false;}

    document.addEventListener('mouseup', makeActive);
    document.addEventListener('mousedown', makeInactive);
},



tick: function(time, timeDelta){
  var data = this.data;
  
  // If the mouse is up...
  if(data.active){

    // get the position of the target
    tPos = this.data.target.object3D.position;

    // Convert x and z position to  of target object into rotation degrees of camera (y-axis).
    var tDegree = ((Math.atan(tPos.z/tPos.x) * 180/Math.PI) - 90) * -1;
    console.log(tPos);
    console.log(tDegree);



    
    // Grab the current y-axis rotation of the camera object
    var cRot = document.querySelector('a-camera').getAttribute('rotation');

    // Grab the y-axis rotation of camera's enclosing box
    bRot = this.el.getAttribute('rotation');

    // Use these two values to determine the total y-axis box rotation
    var totalRotationDistance  = tDegree- (cRot.y + bRot.y);
    console.log(totalRotationDistance);
    
    // If the camera is looking at +- i degree from the target, that's close enough. Stop.
    if (Math.abs(totalRotationDistance) < 1) {return; }

    //Otherwise, calulate hoe much of the total distance to move the camera during this tick.
    var factor = this.data.speed / totalRotationDistance;
    var distanceVector = totalRotationDistance * (factor * (timeDelta / 1000));

    // Then rotate the camera by that amount either to the right or to the left (+ rotated left. - rotates right.)
    if (totalRotationDistance > 0){
    this.el.setAttribute('rotation', {y: bRot.y + distanceVector});
    } else {
        this.el.setAttribute('rotation', {y: bRot.y - distanceVector});
    }
  }
},

remove: function(){

}

});

