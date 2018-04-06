/* This component handles moving the user created object along the x and z
axes, and moving it along the y axis after it has been placed on the x and 
z axis. It is added to the wireframe element by the "playMove" function in
the "manipulation-button-caller" component */


AFRAME.registerComponent('object-moveable', {
    schema: {
        isXZplaced: {type: 'boolean', defult: false},
        mousedown: {type: 'boolean', defult: false},
        y_cord:{type: 'number', default: 0},
        speed : {type: 'number',default:10}
    },

    init: function () {

        var container = document.querySelector('.container');
        var scene = document.querySelector('#scene');
        var wireframe = document.querySelector('.wireframe');
        var jay = document.querySelector('#jayModel');

        var gridSquares = document.querySelectorAll(".gridify-element");


        /* Function to highlight the currently selected floor plane and move
        the container to those x and z coordinates. It is added to the floor
        planes via a mouseover listener later in the code*/

        var selected = function(){
            this.setAttribute('src', "#gridSquare-red");
            var sourcePosition = container.getAttribute('position');
            var targetPosition = this.getAttribute('position');
            container.setAttribute('position',
            {x:targetPosition.x, y:sourcePosition.y, z: -(targetPosition.y)});
        }

        //function to turn any selected floor plane back to white after it is no longer sleected
        var unselected = function(){
            this.setAttribute('src', "#gridSquare-white");
        }

        /* Function for changinging from x and z axis movement to y axis movement */
        var placedXZ = function(){
            // set this.data.isXZplaced to true
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:false, y_cord: currentYpos, speed: 10});
            for(var i = 0; i<gridSquares.length; i++){
                //remove the  event listeners on the grid planes and set them all to white
                (function(){
                    gridSquares[i].removeEventListener('mouseenter', selected);
                    gridSquares[i].setAttribute('src', "#gridSquare-white");
                    gridSquares[i].removeEventListener('mouseleave', unselected);
                    gridSquares[i].removeEventListener('click', placedXZ);
                    
                    
                }());
            }
            // add the event listneers for y axis movement
            wireframe.addEventListener('mousedown',onmousedown);
            wireframe.addEventListener('mouseup',onmouseup);

            /* If the global variable "tutMove2" is set to "true", jay has not yet
            explained how to move the object on the y-axis. Play that audio, and set
            "tutMove2" to false so that he only says this the first time. */

            if(tutMove2){
                tutMove2 = false;
                jay.setAttribute('animation-mixer','clip: talking;');
                jay.setAttribute('sound','src: #placement-y; autoplay: false;');
                jay.components.sound.playSound();    
            }
        }
        // function to change this.data.mousedown to true

        var onmousedown = function(){
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:true, y_cord: currentYpos, speed: 10});
        }
        // function to change this.data.mousedown to false

        var onmouseup = function(){
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:false, y_cord: currentYpos, speed: 10});
        }

        /* adding the event listeners to the grid planes for moving the object along
        the x and z axes. */

        for(var i = 0; i<gridSquares.length; i++){
            (function(){
                gridSquares[i].addEventListener('mouseenter', selected);
                gridSquares[i].addEventListener('mouseleave', unselected);
                gridSquares[i].addEventListener('click', placedXZ);
                
            }());
        } 
    },

    tick: function(){
       // If the object has been placed on the x and z axes, and the mouse is down..
        
       if(this.data.isXZplaced && this.data.mousedown){

            var wireframe = document.querySelector('.wireframe');
            var container = document.querySelector('.container');
            var wireframe = document.querySelector('.wireframe');
            var containerPos = container.getAttribute('position');

            //grab the current value of y_cord...
            var y_cord = wireframe.getAttribute('object-moveable').y_cord;

            /*Do some math with the current position of the container and the current
            mouse position that ends with a variable called "height" which represents
            a y axis value for  the box to go to*/

            var temp_y = currentYpos - y_cord;
            var height = containerPos.y - (temp_y*this.data.speed/1000);
           
           // if the height variable is equal to or greater than the floor position..
           if (height >= -1){
            // Set the container's y position to "height"
            container.setAttribute('position',{
                x: containerPos.x, y: height , z: containerPos.z
           });
        } 
        wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:true, y_cord: currentYpos, speed: 10});

        }
        
    },

    remove: function(){
        var wireframe = document.querySelector('.wireframe');
        wireframe.removeEventListener('mousedown',onmousedown);
        wireframe.removeEventListener('mouseup',onmouseup);

    }

         
});