AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {
        var el = this.el;
        var jay = document.querySelector('#jayModel');
        
        var stopTalking =function(){
            jay.setAttribute('animation-mixer','clip: idle;');
        }

        var fadeIn = function(){
        var fadeInObject= document.createElement('a-animation');
        fadeInObject.setAttribute('attribute','model-opacity');
        fadeInObject.setAttribute('dur','2000');
        fadeInObject.setAttribute('from','0');
        fadeInObject.setAttribute('to','1');
        jay.appendChild(fadeInObject);
        el.removeEventListener('click', fadeIn);


        }
        jay.addEventListener('sound-ended', stopTalking);
        el.addEventListener('click', fadeIn);
        


    },

    tick: function(){
        var jay = document.querySelector('#jayModel');
        var opacity = jay.getAttribute('model-opacity');
        if(opacity >= 1){
            jay.setAttribute('animation-mixer','clip: talking;');          
            var node = document.querySelector('#addBtn');
            jay.components.sound.playSound();
            var camera = document.querySelector('#camera');
            camera.setAttribute('look-trigger','hasLookedUp:false; hasLookedDown:false');
            node.removeAttribute('jay-caller');
            node.setAttribute('visible', false);
        }

       
        }


   


});