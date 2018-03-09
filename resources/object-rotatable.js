AFRAME.registerComponent('object-rotatable', {
    schema: {

    },

    init: function () {
        var el = this.el;
        var handleImgX = document.querySelector('#rotHandleImgX');
        var handleImgY = document.querySelector('#rotHandleImgY');
        var handleImgZ = document.querySelector('#rotHandleImgZ');

        handleImgX.setAttribute('visible', true);
        handleImgY.setAttribute('visible', true);
        handleImgZ.setAttribute('visible', true);
        
        
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
         handleImgX.addEventListener('mouseup',stopRotX);
         handleImgY.addEventListener('mousedown',rotY);
         handleImgY.addEventListener('mouseup',stopRotY);
         handleImgZ.addEventListener('mouseenter',rotZ);
         handleImgZ.addEventListener('mouseup',stopRotZ);
    },

    tick: function(){
        var wireframe = document.querySelector('.wireframe');
        var selectedX = rotHandleImgX.getAttribute('opacity');
        var selectedY = rotHandleImgY.getAttribute('opacity');
        var selectedZ = rotHandleImgZ.getAttribute('opacity');

        var sourceRotation = wireframe.getAttribute('rotation');
        var rotationX = sourceRotation.x;
        var rotationY = sourceRotation.y;
        var rotationZ = sourceRotation.z;
         handleImgX.addEventListener('mouseup',stopRotX);
         console.log ("x " + handleImgX);
        console.log ("y " + handleImgY);
        console.log ("z " + handleImgZ);

        if(selectedX == 1){
            wireframe.setAttribute('rotation',
        {x: rotationX + 0.5, y: rotationY, rotationZ});
        } 
        
        if(selectedY == 1){
            wireframe.setAttribute('rotation',
        {x: rotationX, y: rotationY + 0.5, rotationZ});
        } 
        
        if(selectedZ == 1){
            wireframe.setAttribute('rotation',
        {x: rotationX, y: rotationY, z: rotationZ + 0.5});
        }
 
    }
         
});