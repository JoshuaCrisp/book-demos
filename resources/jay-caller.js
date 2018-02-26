AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {
        var el = this.el;
        console.log('called');
        var jay = document.querySelector('#jayModel');
        
        

        var fadeIn = function(){
        var fadeInObject= document.createElement('a-animation');
        fadeInObject.setAttribute('attribute','model-opacity');
        fadeInObject.setAttribute('dur','2000');
        fadeInObject.setAttribute('from','0');
        fadeInObject.setAttribute('to','1');
        jay.appendChild(fadeInObject);
        el.removeEventListener('click', fadeIn);


        }

        el.addEventListener('click', fadeIn);
        


    },

    tick: function(){

        var jay = document.querySelector('#jayModel');
        var opacity = jay.getAttribute('model-opacity');
        if(opacity >= 1){
            jay.setAttribute('animation-mixer','clip: talking;');
            var node = document.querySelector('#geo-platform');
            jay.components.sound.playSound();
            var camera = document.querySelector('#camera');
            camera.setAttribute('look-trigger','hasLookedUp:false; hasLookedDown:false');
            node.removeAttribute('jay-caller');
        }
    }

   


});