/* This component handles the mouseenter and click events for the scale, rotation, placement
and done buttons. It is added to the manipulation button grid by the "getManipulators" function
in the "color-button-caller" component */

AFRAME.registerComponent('manipulation-button-caller', {
    schema: {},

    init: function () {
        var el = this.el;
        var scene = this.el.sceneEl;
        el.setAttribute('visible', true);
        var jay = document.querySelector('#jayModel');
        var btns = document.querySelectorAll('.manipulation-buttons');
        var manButtonGrid = document.querySelector('.manButtonGrid');
        var object = document.querySelector('.wireframe');
        var rotHandles = document.querySelector('.rotHandles');
        var scaleHandles = document.querySelector('.scaleHandles');

        var rotHandleImgX = document.querySelector('#rotHandleImgX'); 
        var rotHandleImgY = document.querySelector('#rotHandleImgY');
        var rotHandleImgZ = document.querySelector('#rotHandleImgZ');
    
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');

        /* If the global variable "tutManipulate" is set to "true", then Jay has not given
        the overview of what these buttons do. Play that audio, and set "tutManipulate" to
        false so that it only happens the first time they see these buttons */

        if(tutManipulate){
            tutManipulate = false;
            jay.setAttribute('sound','src: #manipulation; autoplay: false;');
            jay.components.sound.playSound();
        }
       
        //Function to handle what happens when the user clicks the rotation button

        var playRotate= function(){

            /* Make the rotation handles visible and assign each handle a coponent to
            handle the axis that it rotates. All three components are found in
            "rotate-on-drag.js"  */

            rotHandles.setAttribute('visible','true');
            rotHandleImgX.setAttribute('drag-rotate-x',{});
            rotHandleImgY.setAttribute('drag-rotate-y',{});
            rotHandleImgZ.setAttribute('drag-rotate-z',{});

            // Set the scale handles to invisible and remove each handle's component

            scaleHandles.setAttribute('visible','false');
            handleImgX.removeAttribute('drag-scale-x');
            handleImgY.removeAttribute('drag-scale-y');
            handleImgZ.removeAttribute('drag-scale-z');

            //Remove the object-moveable component from the container

            object.removeAttribute('object-moveable');

            /* If the global variable "tutRotate" is set to "true", then Jay has not
            explained how to use the rotation handles. Play that audio, and set "tutRotate"
            to false so that it only happens the first time they use these handles */

            if (tutRotate){
                tutRotate = false;
                jay.setAttribute('sound','src: #rotation; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        //Function to handle what happens when the user clicks the scale button
        
        var playScale= function(){

            /* Make the scale handles visible and assign each handle a coponent to
            handle the axis that it scales. All three components are found in
            "scale-on-drag.js" */

            scaleHandles.setAttribute('visible', true);
            handleImgX.setAttribute('drag-scale-x',{});
            handleImgY.setAttribute('drag-scale-y',{});
            handleImgZ.setAttribute('drag-scale-z',{});

             // Set the rotation handles to invisible and remove each handle's component

            rotHandles.setAttribute('visible','false');
            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgZ.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');

            //Remove the object-moveable component from the container

            object.removeAttribute('object-moveable');
            
            /* If the global variable "tutScale" is set to "true", then Jay has not yet
            explained how to use the scale handles. Play that audio, and set "tutScale" to
            false so that it only happens the first time they use these handles */

            if(tutScale){
                tutScale = false;
                jay.setAttribute('sound','src: #scale; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        // Function to handle what happens when the user clicks the placement button

        var playMove= function(){
            
            //Add the "object-moveable" to the container

            object.setAttribute('object-moveable',{});

            // Set the rotation handles to invisible and remove each handle's component

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');

            // Set the scale handles to invisible and remove each handle's component

            scaleHandles.setAttribute('visible', false);
            handleImgX.removeAttribute('drag-scale-x');
            handleImgY.removeAttribute('drag-scale-y');
            handleImgZ.removeAttribute('drag-scale-z');
            handleImgZ.removeAttribute('drag-scale-z');

             /* If the global variable "tutMove" is set to "true", then Jay has not yet
            explained how to position the object in the scene. Play that audio, and
            set "tutMove" to false so that it only happens the first time  the user moves
            an object around in the scene */

            if(tutMove){
                tutMove = false;
                jay.setAttribute('sound','src: #placement-xz; autoplay: false;');
                jay.components.sound.playSound();
            }
        }

        //Function to handle what happens when the user clicks the done button

        var created = function(){

            // Set the rotation handles to invisible and remove each handle's component

            rotHandleImgX.removeAttribute('drag-rotate-x');
            rotHandleImgY.removeAttribute('drag-rotate-y');
            rotHandleImgY.removeAttribute('drag-rotate-z');
            rotHandles.setAttribute('visible','false');

            // Set the scale handles to invisible and remove each handle's component

            scaleHandles.setAttribute('visible', false);
            handleImgX.removeAttribute('drag-scale-x');
            handleImgY.removeAttribute('drag-scale-y');
            handleImgZ.removeAttribute('drag-scale-z');
            handleImgZ.removeAttribute('drag-scale-z');

             //Remove the object-moveable component from the container

            object.removeAttribute('object-moveable');

            var container = document.querySelector('.container');
            var containerPos = container.getAttribute('position');

            /* If the container is in the same place in whch it was created, then the user
            has not moved it. Play the audio that tells them to move the object before
            they hit done */

            if(containerPos.x == 0 && containerPos.y == -0.5 && containerPos.z == -3){
                jay.setAttribute('sound','src: #notyet; autoplay: false;');
                jay.components.sound.playSound();

                //otherwise..
             }else {

                //Add one to the global "objectCount" variable

                objectCount +=1;

                /* change the class names for the objects in the container hierarchy
                so that they will not be affected when the "geometry-button-caller",
                "color-button-caller", or "manipulation-button caller" components
                are called when the next object is created */

                container.setAttribute('class','container'+objectCount);
                var mesh = document.querySelector('.mesh');
                mesh.setAttribute('class','mesh'+objectCount);
                var wireframe = document.querySelector('.wireframe');
                wireframe.setAttribute('class','wireframe'+objectCount);

                //Remove the manipulation buttonGrid from the scene

                manButtonGrid.parentNode.removeChild(manButtonGrid);
            
                //Remove the manipulation handles from the object

                scaleHandles.parentNode.removeChild(scaleHandles);
                rotHandles.parentNode.removeChild(rotHandles);

                /* Clone the object, and add the cloned object to the scene graph using
                the global "objectXpos" and "objectYpos" variables to help with positioning */

                var graph = document.querySelector('#scene-graph');
                var scenegraph = object.cloneNode();
                scenegraph.setAttribute('material', wireframe.getAttribute('material'));
                console.log(scenegraph);
                graph.appendChild(scenegraph);
                scenegraph.setAttribute('position',
                {x: objectXpos, y: objectYpos, z: 0});
                objectXpos += 3;
                if (objectXpos >= 14){
                    objectXpos = -14
                    objectYpos -=4;
                }

                /* If the global variable "tutCreated" is set to "true", then Jay has not yet
                explained that the user will now create objects on their own. Play that audio,
                and set "tutCreated" to false so that it only happens after they fully create
                their first object and place it in the scene. Add an event listener for when
                the audio is finished to trigger the "walkaway" function */

                if(tutCreated){
                    tutCreated = false;
                    jay.setAttribute('sound','src: #created; autoplay: false;');
                    jay.components.sound.playSound();
                    jay.addEventListener('sound-ended',walkAway);

                /*If the global variable "tutCreated" is set to false, then the user has done all
                of this before. Skip the audio and walkaway function, and just create the buttons
                for creating a new mesh or going to the scene graph */
                    
                } else {
                    scene.setAttribute('add-button-caller',{});
                }
            }
        }

        /*Simple function for setting the jay model animation clip to idle. It exists only so that
        it can be called in the setTimout functions in the "walkaway" function */

        var idle = function(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        /* This function adds the component that creates the buttons for creating a new mesh or
        viewing the scene graph.It also create animations for the jay model so that he can walk
        away when he is done talking. */

        var walkAway = function(){

             //Remove the event listener that called this function

             jay.removeEventListener('sound-ended',walkAway);

             //Create the buttons for creating a new mesh or going to the scene graph
 
             scene.setAttribute('add-button-caller',{});

            // Start walking animation

            jay.setAttribute('animation-mixer','clip: walk;');

            //Turn away from the user

            var turnObject= document.createElement('a-animation');
            turnObject.setAttribute('attribute','rotation');
            turnObject.setAttribute('dur','1500');
            turnObject.setAttribute('easing','linear');
            turnObject.setAttribute('from','0 30 0');
            turnObject.setAttribute('to','0 -55 0');

            //Walk away

            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','6000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-2 -1 -4');
            walkObject.setAttribute('to','-5 -1 -4');
            walkObject.setAttribute('delay','1000');

            //Turn back toward user when finished walking away

            var turnBackObject= document.createElement('a-animation');
            turnBackObject.setAttribute('attribute','rotation');
            turnBackObject.setAttribute('dur','2000');
            turnBackObject.setAttribute('easing','linear');
            turnBackObject.setAttribute('from','0 -55 0');
            turnBackObject.setAttribute('to','0 45 0');
            turnBackObject.setAttribute('delay','6000');

            
            jay.appendChild(turnObject);
            jay.appendChild(walkObject);
            jay.appendChild(turnBackObject);

            // Go back to idle animation once other animations are complete
            setTimeout(idle, 8000);

           
        }
         


     //Add the event listeners to the buttons in the manipulation buttonGrid

     btns[0].addEventListener('click', playScale);
     btns[1].addEventListener('click', playRotate);
     btns[2].addEventListener('click', playMove);
     btns[3].addEventListener('click', created);
    }

   


});