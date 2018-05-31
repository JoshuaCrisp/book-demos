/* This component handles the creation of the button grid used to create new wireframes.
It is added to the add button by the "init" function of the "add-button-caller" component */

AFRAME.registerComponent('geometry-button-caller', {
    schema: {},

    init: function () {
        var el = this.el;
        var scene = document.querySelector('#scene');
        var jay = document.querySelector("#jayModel");

        
            //Function to be called when the add button is clicked
            var getButtons = function(){

            //First, delete the add button (and possibly done button) from the scene
            scene.removeAttribute('add-button-caller');

            /* If the global variable "tutGeo" is set to "true", then Jay has not yet explained
            geometry to them. Play that audio, and set "tutGeo" to false so that it only happens
            the first time the user begins creating a geometry */
            if(tutGeo){
                tutGeo = false;
                jay.setAttribute('sound',"src: #geometry; autoplay: false;");
                jay.setAttribute('animation-mixer','clip: talking;');
                jay.components.sound.playSound();
                var camera = document.querySelector('#camera');
                camera.setAttribute('follow-target',{target:'#jayModel', speed: 10, active: true});
            }
            
            // Remove the listener for this function as soon as it is called.
            el.removeEventListener('mouseenter',getButtons);

            /* Create a button grid using the "gridify-buttons" component, and set it to be
            far away */

            var geobtngrid = document.createElement('a-entity');
            geobtngrid.setAttribute('gridify-buttons',"class: geometry-button; btnCount: 5; btnWidth: 1;  columns: 2; btnHeight: 1; spacing: 0.1; url:assets/buttons/geometryBtns/; imagebase: geometryButton");
            geobtngrid.setAttribute('class', 'button');
            geobtngrid.setAttribute('position', '4 1.273 -10');
            geobtngrid.setAttribute('scale','0.8 0.8 0.8');

            //Add the "make-primitives" component to the button grid
            geobtngrid.setAttribute('make-primitives',{});

            // Then create an animation to zoom the button grid forward

            var zoomIn = document.createElement('a-animation');
            zoomIn.setAttribute('attribute', 'position');
            zoomIn.setAttribute('from', '4 1.273 -10');
            zoomIn.setAttribute('to', '4 1.273 -5');
            zoomIn.setAttribute('dur', '500');

            // Add the button grid to the scene, and the animation to the button grid
            scene.appendChild(geobtngrid);
            geobtngrid.appendChild(zoomIn);
        }

        //Add the listener to the add button
        el.addEventListener('click', getButtons); 

    }


});