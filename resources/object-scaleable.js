AFRAME.registerComponent('object-scaleable', {
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
        var selectedY = handleImgY.getAttribute('opacity');
        var selectedZ = handleImgZ.getAttribute('opacity');

        var sourceScale = wireframe.getAttribute('scale');
        var scaleX = sourceScale.x;
        var scaleY = sourceScale.y;
        var scaleZ = sourceScale.z;

        if(selectedX >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX + 0.005, y: scaleY, scaleZ});
        }

        if(selectedY >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX, y: scaleY + 0.005, scaleZ});
        }
        

        if(selectedZ >= 1){
            wireframe.setAttribute('scale',
        {x: scaleX, y: scaleY, z: scaleZ + 0.005});
        }
 
    }
         
});