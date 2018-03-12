

AFRAME.registerComponent('audio-cue',{
    schema : {},
  
    init : function(){

        var scene = document.querySelector('#scene');
        var jay = document.querySelector('#jayModel');
        var image = document.createElement('a-plane');


        setTimeout(startWalking, 2000);
        setTimeout(stopWalking, 17000);
        setTimeout(callImage, 24500);
        setTimeout(changeImage, 39000);
        setTimeout(stopWaving, 48000);
        setTimeout(removeImage, 55000);



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

        function stopWalking(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }


        function callImage(){
            image.setAttribute('id', 'sutherlandPlane');
            image.setAttribute('height', '3');
            image.setAttribute('width', '6');
            image.setAttribute('src', '#sutherland');
            image.setAttribute('position', '2 2 -5');
            scene.appendChild(image);
        }

        function changeImage(){
        image.setAttribute('src', '#damocles');
        jay.setAttribute('animation-mixer','clip: talking;');
        }

        function stopWaving(){
            jay.setAttribute('animation-mixer','clip: idle;');
            }

        function removeImage(){
            scene.removeChild(image);
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
    },

    remove: function(){
        var jay = document.querySelector('#jayModel');
        var animations = jay.querySelectorAll('a-animation');

        for( var i= 0; i< animations.length; i++){
            jay.removeChild(animations[i]);
        }
    }
      
        });






        