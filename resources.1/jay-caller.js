AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {

        var el = this.el;
        
        var stopTalking =function(){
            el.setAttribute('animation-mixer','clip: idle;');
        }

        var getBtn =function(){
            tutWelcome = false;
            this.el.sceneEl.setAttribute('add-button-caller',{});
            el.removeEventListener('sound-ended', getBtn);     
        }

        var fadeIn = function(){
            var fadeInObject= document.createElement('a-animation');
            fadeInObject.setAttribute('attribute','model-opacity');
            fadeInObject.setAttribute('dur','2000');
            fadeInObject.setAttribute('from','0');
            fadeInObject.setAttribute('to','1');
            el.appendChild(fadeInObject);
        } 

        function getPos(event){
            currentXpos = event.clientX;
            currentYpos = event.clientY; 
        }


        el.addEventListener('sound-ended', stopTalking);
        el.addEventListener('sound-ended', getBtn);


        document.addEventListener('mousemove',getPos);
        document.addEventListener('click',getPos);


    },

    tick: function(){
        var opacity = el.getAttribute('model-opacity');
        var el = this.el;
        
        if(opacity >= 1){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','16500');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-4 -1 -16');
            walkObject.setAttribute('to','-2 -1 -3');
            walkObject.setAttribute('delay','500');
            el.appendChild(walkObject);
            el.setAttribute('animation-mixer','clip: walk;');          
            el.components.sound.playSound();
            el.removeAttribute('jay-caller');
        }
    }


   


});