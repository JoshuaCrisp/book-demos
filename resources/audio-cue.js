/* This component is just a collection of setTimeout events that handle the animations
(both for the Jay model and the images) that happen during the introductory audio. It
is added to a-scene by the  "tick" function in the "jay-caller" component */

AFRAME.registerComponent('audio-cue',{
    schema : {},
  
    init : function(){

        var scene = document.querySelector('#scene');
        var jay = document.querySelector('#jayModel');
        var image = document.createElement('a-image');


        setTimeout(startWalking, 2000);
        setTimeout(idle, 15000);
        setTimeout(pointing, 20000);
        setTimeout(callImage, 21500);
        setTimeout(fadeIn, 21500);
        setTimeout(idle, 24000);
        setTimeout(talking2, 29000);
        setTimeout(idle, 34000);
        setTimeout(pointing, 34000);
        setTimeout(damoclesImage, 35500);
        setTimeout(idle, 36500);
        setTimeout(talking, 39500);
        setTimeout(idle, 44000);
        setTimeout(fadeOut, 48000);
        setTimeout(triangleImage, 55000);
        setTimeout(fadeIn, 59000);
        setTimeout(pointing, 58000);
        setTimeout(idle, 62000)
        setTimeout(platoImage, 66500);
        setTimeout(talking2, 68000);
        setTimeout(idle, 73000);
        setTimeout(solidImage, 70000);
        setTimeout(talking, 83000);
        setTimeout(fadeOut, 86000);
        setTimeout(idle, 88000);
        setTimeout(animalImage, 90000);
        setTimeout(fadeIn, 90000);
        setTimeout(talking, 920000);
        setTimeout(fadeOut, 94000);
        setTimeout(removeImage, 95000);
        setTimeout(idle, 950000);

        /* These functions  change the animation-mixer clip to a differnet
        animation. Making simple functions for them makes it easy to call them
        with the setTimout animations */

        function idle(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        function talking(){
            jay.setAttribute('animation-mixer','clip: talking;');
        }

        function talking2(){
            jay.setAttribute('animation-mixer','clip: talking2;');
        }

        function pointing(){
            jay.setAttribute('animation-mixer','clip: pointing;');
        }

        function stopWaving(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        // animate the jay model position so that he walks toward the user at the start

        function startWalking(){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','13000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-6 -1 -16');
            walkObject.setAttribute('to','-2 -1 -4');
            jay.appendChild(walkObject);
            jay.setAttribute('animation-mixer','clip: walk;');
        }

        //Simple reusable fadein animation

        function fadeIn(){
            var fade = document.createElement('a-animation');
            fade.setAttribute('attribute', 'opacity');
            fade.setAttribute('from', '0');
            fade.setAttribute('to', '1');
            fade.setAttribute('dur', '1000');
            image.appendChild(fade);
            
        }

        //Simple reusable fadout animation

        function fadeOut(){
            var fade = document.createElement('a-animation');
            fade.setAttribute('attribute', 'opacity');
            fade.setAttribute('from', '1');
            fade.setAttribute('to', '0');
            fade.setAttribute('dur', '1000');
            image.appendChild(fade);
            
        }

        /* Function to create the a-plane that will be used for all the images. It starts off
        with the Sutherland image and an opacity of 0 so it can fade in */

        function callImage(){
            image.setAttribute('id', 'imagePlane');
            image.setAttribute('transparent', 'true');
            image.setAttribute('opacity', '0');
            image.setAttribute('height', '3');
            image.setAttribute('width', '6');
            image.setAttribute('src', '#sutherland');
            image.setAttribute('position', '2 2 -5');
            scene.appendChild(image); 
            
        }

        //Functions to handle changing the image src for the image plane

        function removeImage(){
            scene.removeChild(image);
        }

        function damoclesImage(){
        image.setAttribute('src', '#damocles');
        }

        function triangleImage(){
            image.setAttribute('src', '#triangles');
        }

        function platoImage(){
            image.setAttribute('src', '#plato');
        }

        function solidImage(){
            image.setAttribute('src', '#solid');
        }

        function animalImage(){
            image.setAttribute('src', '#animal');
        }

    },



    remove: function(){
        var jay = document.querySelector('#jayModel');
        var animations = jay.querySelectorAll('a-animation');

        for( var i= 0; i< animations.length; i++){
            jay.removeChild(animations[i]);
        }

        var imagePlane = document.querySelector('#imagePlane');
    }
      
        });






        