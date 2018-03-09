AFRAME.registerComponent('object-scaleable', {
    schema: {

    },

    init: function () {
        var el = this.el;
        var scaleHandles = document.querySelector('.scaleHandles')
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');


        
        handleImgX.setAttribute('model-opacity', 0.5);
        handleImgY.setAttribute('model-opacity', 0.5);
        handleImgZ.setAttribute('model-opacity', 0.5);
        
        
        var rotX= function(){
           handleImgX.setAttribute('model-opacity',1);
        }
        
        var rotY= function(){
            handleImgY.setAttribute('model-opacity',1);
        }

        var rotZ= function(){
            handleImgZ.setAttribute('model-opacity',1);
        }

        var stopRotX= function(){
            handleImgX.setAttribute('model-opacity',0.5);
         }
         
         var stopRotY= function(){
             handleImgY.setAttribute('model-opacity',0.5);
         }
 
         var stopRotZ= function(){
             handleImgZ.setAttribute('model-opacity',0.5);
         }

         handleImgX.addEventListener('mousedown',rotX);
         handleImgX.addEventListener('mouseleave',stopRotX);
         handleImgY.addEventListener('mousedown',rotY);
         handleImgY.addEventListener('mouseleave',stopRotY);
         handleImgZ.addEventListener('mousedown',rotZ);
         handleImgZ.addEventListener('mouseleave',stopRotZ);
    },

    tick: function(){
        var wireframe = document.querySelector('.wireframe');
        var selectedX = handleImgX.getAttribute('model-opacity');
        var selectedY = handleImgY.getAttribute('model-opacity');
        var selectedZ = handleImgZ.getAttribute('model-opacity');

        var positionX = handleImgX.getAttribute('position');
        var positionY = handleImgY.getAttribute('position');
        var positionZ = handleImgZ.getAttribute('position');

        var sourceScale = wireframe.getAttribute('scale');
        var scaleX = sourceScale.x;
        var scaleY = sourceScale.y;
        var scaleZ = sourceScale.z;

        if(selectedX >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX + 0.005, y: scaleY, scaleZ});
        handleImgX.setAttribute('position',
        {x:positionX.x + 0.005, y:positionX.y, z:positionX.z}) 
        }

        if(selectedY >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX, y: scaleY + 0.005, scaleZ});
        handleImgY.setAttribute('position',
        {x:positionY.x , y:positionY.y + 0.005, z:positionY.z})
        }
        

        if(selectedZ >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX, y: scaleY, z: scaleZ + 0.005});
        handleImgZ.setAttribute('position',
        {x:positionZ.x + 0.0025 , y:positionZ.y + 0.0025, z:positionZ.z + 0.005})
        }
 
    }
         
});