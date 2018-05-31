/*This component is added to the add button by the "add-button-caller"
component when the site first loads. It makes jay fade up, and adds the
window listeners that keep track of the mouse x and y positions*/

AFRAME.registerComponent('start', {
    schema: {},

    init: function () {
        
        this.el.addEventListener('click', callJay);

        /* This event listener is never removed. It remains active the whole time
        the page is running */

        document.addEventListener('mousemove',getPos);

        /* Adds the "jay-caller" component to the jay model, which makes him fade in and
        start talking */

        function callJay(){
            var jay = document.querySelector('#jayModel');
            var camera = document.querySelector('#camera');
            camera.setAttribute('follow-target',{target:'#jayModel', speed: 10, active: true});
            jay.setAttribute('jay-caller',{});
            this.removeEventListener('click', callJay);
        }

        /* Continually sets the value of the global "currentXpos"  and "currentYpos variables
        to the x and y positions of the mouse */

        function getPos(event){
            currentXpos = event.clientX;
            currentYpos = event.clientY; 
        }

        

    }
   
});