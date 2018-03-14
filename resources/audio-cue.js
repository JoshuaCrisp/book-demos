

AFRAME.registerComponent('audio-cue',{
    schema : {},
  
    init : function(){

        var scene = document.querySelector('#scene');
        var jay = document.querySelector('#jayModel');
        var image = document.createElement('a-image');


        setTimeout(startWalking, 2000);
        setTimeout(idle, 17000);
        setTimeout(pointing, 23000);
        setTimeout(callImage, 24500);
        setTimeout(fadeIn, 24500);
        setTimeout(idle, 27000);
        setTimeout(talking2, 29000);
        setTimeout(idle, 34000);
        setTimeout(pointing, 37500);
        setTimeout(damoclesImage, 39000);
        setTimeout(idle, 40000);
        setTimeout(talking, 43000);
        setTimeout(idle, 48000);
        setTimeout(fadeOut, 53000);
        setTimeout(triangleImage, 65000);
        setTimeout(fadeIn, 65000);
        setTimeout(pointing, 65000);
        setTimeout(idle, 70000)
        setTimeout(platoImage, 73000);
        setTimeout(talking2, 75000);
        setTimeout(idle, 80000);
        setTimeout(solidImage, 76000);
        setTimeout(talking, 83000);
        setTimeout(fadeOut, 86000);
        setTimeout(idle, 88000);
        setTimeout(animalImage, 90000);
        setTimeout(fadeIn, 90000);
        setTimeout(talking, 100000);
        setTimeout(fadeOut, 103000);
        setTimeout(removeImage, 103000);
        setTimeout(talking2, 104000);
        setTimeout(idle, 110000);



        function startWalking(){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','15000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-6 -1 -16');
            walkObject.setAttribute('to','-2 -1 -4');
            jay.appendChild(walkObject);
            jay.setAttribute('animation-mixer','clip: walk;');
        }

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

        function stopWaving(){
            jay.setAttribute('animation-mixer','clip: idle;');
            }

        function walkForward(){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','4000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-2 -1 -4');
            walkObject.setAttribute('to','-2 -1 -2');
            jay.appendChild(walkObject);
            jay.setAttribute('animation-mixer','clip: walk;');
        }

        function fadeIn(){
            var fade = document.createElement('a-animation');
            fade.setAttribute('attribute', 'opacity');
            fade.setAttribute('from', '0');
            fade.setAttribute('to', '1');
            fade.setAttribute('dur', '1000');
            image.appendChild(fade);
            
        }

        function fadeOut(){
            var fade = document.createElement('a-animation');
            fade.setAttribute('attribute', 'opacity');
            fade.setAttribute('from', '1');
            fade.setAttribute('to', '0');
            fade.setAttribute('dur', '1000');
            image.appendChild(fade);
            
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






        