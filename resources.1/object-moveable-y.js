var isXZplaced = false;

AFRAME.registerComponent('object-moveable-y', {
    schema: {
        clicked: {type: boolean, default: true}
    },

    init: function () {
        var scene = document.querySelector('#scene');
        scene.addEventListener('click', created);
        
        var created = function(){
            scene.addEventListener('click', created);
            //scene.removeAttribute('object-moveable-y');   
        }

    },

    tick: function(){
       
            var data = this.data.clicked;
            console.log(data);
            var camera = document.querySelector('#camera').getAttribute('rotation').x;
            var container = document.querySelector('.container');
            var containerPos = container.getAttribute('position');
            var height = (camera / (Math.abs(containerPos.x)+ Math.abs(containerPos.z)))
           
           if (height >= -1){
            container.setAttribute('position',{
                x: containerPos.x, y: height , z: containerPos.z
           });
        } 

        
    }

         
});