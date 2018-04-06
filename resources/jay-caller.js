/* This component causes the Jay model to fade in when the start button is clicked. It also adds
the event listenr that will cause jay to stop hist talking animations whenever an audio clip ends.
It is added to the jay model by the "init" function of the "start" component */

AFRAME.registerComponent('jay-caller', {
    schema: { 
        fadeup: {type:'boolean', default: true}
    },

    init: function () {

        this.el.sceneEl.removeAttribute('add-button-caller');
        
        // Function to return  Jay model to neutral pose

        var stopTalking =function(){
            this.setAttribute('animation-mixer','clip: idle;');
        }

        // Function to handle whathappens when Jay finishes with the introduction.

        var getBtn =function(){
            tutWelcome = false;
            var scene = document.querySelector('#scene');
            scene.removeAttribute('audio-cue');
            scene.setAttribute('add-button-caller',{});
            this.removeEventListener('sound-ended', getBtn);     
        }

        /* Adds the stopTalking listener to the jay mode, which is activated when the model's
        sound component emits that the sound has ended. It is never removed. This way Jay will
        always stop waving, pointing, etc. when he finishes talking */

        this.el.addEventListener('sound-ended', stopTalking);

        // The getBtn function is also called when Jay stops talking

        this.el.addEventListener('sound-ended', getBtn);

        /* Animation to fade in the Jay model. It uses the "model-opacity" component, because
        gltf models cant just just have transparency set to true */

        var fadeInObject= document.createElement('a-animation');
        fadeInObject.setAttribute('attribute','model-opacity');
        fadeInObject.setAttribute('dur','2000');
        fadeInObject.setAttribute('from','0');
        fadeInObject.setAttribute('to','1');
        this.el.appendChild(fadeInObject);


    },

    tick: function(){

         /* Once the model-opacity gets to 1 (full opacity), the "audio-cue" component gets
        added to a-scene, Jay starts talking, and this component gets removed from the jay model */

        var scene = document.querySelector('#scene');
        var opacity = this.el.getAttribute('model-opacity');
        
        if(opacity >= 1){
            
            var scene = document.querySelector('#scene');         
            this.el.components.sound.playSound();
            this.el.removeAttribute('jay-caller');
            scene.setAttribute('audio-cue',{});

        }
    }


   


});