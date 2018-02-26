AFRAME.registerComponent('object-scalable', {
    schema: {

    },

    init: function () {
        var el = this.el;
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');

        handleImgX.setAttribute('visible', true);
        handleImgY.setAttribute('visible', true);
        handleImgY.setAttribute('visible', true);
        
        
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
        var selectedY = handleImgX.getAttribute('opacity');
        var selectedZ = handleImgX.getAttribute('opacity');

        var sourceRotation = wireframe.getAttribute('rotation');
        var rotationX = sourceRotation.x;
        var rotationY = sourceRotation.y;
        var rotationZ = sourceRotation.z;

        if(selectedX >= 1){
            wireframe.setAttribute('rotation',
        {x: rotationX + 10, y: rotationY, rotationZ});
        }

        if(selectedY >= 1){
            wireframe.setAttribute('rotation',
        {x: rotationX, y: rotationY + 10, rotationZ});
        }
        

        if(selectedZ >= 1){
            wireframe.setAttribute('rotation',
        {x: rotationX, y: rotationY, z: rotationZ + 10});
        }
 
    }
         
});