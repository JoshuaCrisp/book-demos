/* This component handles all of the animations that happen when the user finishes creating
objects and is ready to learn about the scene graph. It is added to the done button element
by the "doneClick" function of the "add-button-caller" component */

AFRAME.registerComponent('done-button', {
    schema: {},

    init: function () {

        var scene = document.querySelector('#scene');
        var jay = document.querySelector('#jayModel');

        /*vRemove the add-button-caller component from a-scene. It will always be there at the time 
        this component is added to a-scene */

        scene.removeAttribute('add-button-caller');

        // Start the jay model talking about the scene graph 

        jay.setAttribute('sound','src: #done; autoplay: false;');
        jay.components.sound.playSound();

        
        // Function to make the scene graph visible

        var showGraph = function(){
            var graph = document.querySelector('#scene-graph');
            graph.setAttribute('visible', 'true');
        }

        /*Function to make the camera model visible, and to zoom the user camera back so that the camera
        model is vidible */

        var showCamera = function(){
            var camera = document.querySelector('#camera');
            var camcorder = document.querySelector('#scene-camcorder');

            var moveback = document.createElement('a-animation');
            moveback.setAttribute('attribute','position');
            moveback.setAttribute('from','0 0 0');
            moveback.setAttribute('to','0 2 5');
            moveback.setAttribute('dur','1000');

            var camVisible = document.createElement('a-animation');
            camVisible.setAttribute('attribute','model-opacity');
            camVisible.setAttribute('from','0');
            camVisible.setAttribute('to','1');
            camVisible.setAttribute('dur','1000');

            camera.appendChild(moveback);

            camcorder.setAttribute('visible', 'true');
            camcorder.appendChild(camVisible); 

         }

         // Call "showGraph" and "showCamera" at the appropriate times during Jay's speech

         setTimeout(showGraph, 11000);
         setTimeout(showCamera, 38500);
    }

       

        
        
        
   
});











    
