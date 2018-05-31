/* This component handles the mouseenter and click events for the material buttons. It is
added to the material button grid by the "getMaterials" function in the "make-primitives"
component */

AFRAME.registerComponent('color-button-caller', {
    schema: {},

    init: function () {
        var scene = document.querySelector('#scene');
        var el = this.el;
        var data = this.data;
        el.setAttribute('visible', true);
        
         /* If the global variable "tutMaterial" is set to "true", then Jay has not yet explained
         materials to the user. Play that audio, and set "tutGeo" to false so that it only happens
         the first time the user begins selecting a material */

        if(tutMaterial){
            tutMaterial = false;
            var camera = document.querySelector('#camera');
            camera.setAttribute('follow-target',{target:'#jayModel', speed: 10, active: true});
            var jay = document.querySelector('#jayModel');
            jay.setAttribute('sound','src: #material; autoplay: false;');
            jay.setAttribute('animation-mixer','clip: talking;');
            jay.components.sound.playSound();
        }
        
        var wireframe = document.querySelector('.wireframe');
        var container = document.querySelector('.container');
        var colorButtons = document.querySelectorAll('.color-picker-buttons');

        /*function to apply the material of the selected button to the wireframe. It
        will be added to a mouseenter event listener later in the code */

        var colorOptions = function(){
            var selected = this;
            var material = selected.getAttribute('material');
            wireframe.setAttribute('material',material);    
        }

        /*function to create gridButtons for maniplation, rotation and scale. It
        will be added to a click event listener later in the code */

        var getManipulators = function(){
            var colorGrid = document.querySelector('#colorGrid');

            //create a new buttonGrid

            var manBtns = document.createElement('a-entity');
            manBtns.setAttribute('gridify-buttons',"class: manipulation-buttons; btnCount: 4; btnWidth: 1;  columns: 4; btnHeight: 1; spacing: 0.2;  url:assets/buttons/manipulationBtns/; imagebase: manipulation-button" );
            manBtns.setAttribute('position', " 3.5 2 -10");
            manBtns.setAttribute('scale', "0.5 0.5 0.5");
            manBtns.setAttribute('class', "manButtonGrid");

            //Create a zoom-in effect for the button grid

            var zoomIn = document.createElement('a-animation');
            zoomIn.setAttribute('attribute', 'position');
            zoomIn.setAttribute('from', '3.5 2 -10');
            zoomIn.setAttribute('to', '3.5 2 -3');
            zoomIn.setAttribute('dur', '500');
            
            //Add the buttonGrid and zoom-in to the scene

            scene.appendChild(manBtns);
            manBtns.appendChild(zoomIn);

            /* Add the "manipulation-button-caller"  component to the newly created
            buttonGid, remove all listeners from the current (material) button grid,
            and remove the material buttonGrid from the scene*/

            manBtns.setAttribute('manipulation-button-caller',{});
            el.removeEventListener('mouseenter',colorOptions);
            el.removeEventListener('click',getManipulators);
            el.removeAttribute('color-button-caller');
            scene.removeChild(el);
        }

        // Add the event listeners to the buttons in the material button grid

        for(var i = 0; i< colorButtons.length; i++){
        colorButtons[i].addEventListener('mouseenter', colorOptions);
        colorButtons[i].addEventListener('click', getManipulators);
        }
    },


});