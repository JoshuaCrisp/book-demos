AFRAME.registerComponent('start', {
    schema: {},

    init: function () {
        
        this.el.addEventListener('click', callJay);
        document.addEventListener('mousemove',getPos);
        
        function callJay(){
            var jay = document.querySelector('#jayModel');
            jay.setAttribute('jay-caller',{});
            this.removeEventListener('click', callJay);
        }

        function getPos(event){
            currentXpos = event.clientX;
            currentYpos = event.clientY; 
        }

    }
   
});