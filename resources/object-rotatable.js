AFRAME.registerComponent('object-rotatable', {
    schema: {

    },

    init: function () {
        var el = this.el;
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');

        handleImgX.setAttribute('visible', true);
        handleImgY.setAttribute('visible', true);
        handleImgZ.setAttribute('visible', true);
        
        
        var rotX= function(){
           handleImgX.setAttribute('opacity',1);
        }
        
        var rotY= function(){
            handleImgY.setAttribute('opacity',1);
        }

        var rotZ= function(){
            handleImgZ.setAttribute('opacity',1);
        }

        var stopRotX= function(){
            handleImgX.setAttribute('opacity',0.5);
         }
         
         var stopRotY= function(){
             handleImgY.setAttribute('opacity',0.5);
         }
 
         var stopRotZ= function(){
             handleImgZ.setAttribute('opacity',0.5);
         }

         handleImgX.addEventListener('mouseenter',rotX);
         handleImgX.addEventListener('mouseleave',stopRotX);
         handleImgY.addEventListener('mouseenter',rotY);
         handleImgY.addEventListener('mouseleave',stopRotY);
         handleImgZ.addEventListener('mouseenter',rotZ);
         handleImgZ.addEventListener('mouseleave',stopRotZ);
    },

    tick: function(){
        var wireframe = document.querySelector('.wireframe');
        var selectedX = handleImgX.getAttribute('opacity');
        var selectedY = handleImgY.getAttribute('opacity');
        var selectedZ = handleImgZ.getAttribute('opacity');

        var sourceRotation = wireframe.getAttribute('rotation');
        var rotationX = sourceRotation.x;
        var rotationY = sourceRotation.y;
        var rotationZ = sourceRotation.z;
        console.log ("x " + rotationX);
        console.log ("y " + rotationY);
        console.log ("z " + rotationZ);

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