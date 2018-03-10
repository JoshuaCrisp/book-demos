AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {

        this.el.sceneEl.removeAttribute('add-button-caller');
        
        var stopTalking =function(){
            this.setAttribute('animation-mixer','clip: idle;');
        }

        var getBtn =function(){
            tutWelcome = false;
            var scene = document.querySelector('#scene');
            scene.setAttribute('add-button-caller',{});
            this.removeEventListener('sound-ended', getBtn);     
        }

        this.el.addEventListener('sound-ended', stopTalking);
        this.el.addEventListener('sound-ended', getBtn);

        var fadeInObject= document.createElement('a-animation');
        fadeInObject.setAttribute('attribute','model-opacity');
        fadeInObject.setAttribute('dur','2000');
        fadeInObject.setAttribute('from','0');
        fadeInObject.setAttribute('to','1');
        this.el.appendChild(fadeInObject);


    },

    tick: function(){

        var opacity = this.el.getAttribute('model-opacity');

        if(opacity >= 1){
            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','16500');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-4 -1 -16');
            walkObject.setAttribute('to','-2 -1 -3');
            walkObject.setAttribute('delay','500');
            this.el.appendChild(walkObject);
            this.el.setAttribute('animation-mixer','clip: walk;');          
            this.el.components.sound.playSound();
            this.el.removeAttribute('jay-caller');
        }
    }


   


});