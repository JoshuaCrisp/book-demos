AFRAME.registerComponent('manipulation-button-caller', {
    schema: {
    xRot: {type: 'boolean', default:false},
    yRot: {type: 'boolean', default:false},
    zRot: {type: 'boolean', default:false},
    },

    init: function () {
        var el = this.el;
        var yHandle = document.querySelector('#handleImgX');
        var yHandle = document.querySelector('#handleImgY');
        var zHandle = document.querySelector('#handleImgZ');
        
        var btns = document.querySelectorAll('.manipulation-buttons');
        var object = document.querySelector('.wireframe');
        console.log(object);
       
        
     var rotateX = function(){
        this.data.xRot = true;
        var xHandle = document.querySelector('#handleImgX');
        xHandle.setAttribute('src','#handle-xs')

     }

     var stopRotateX = function(){
        this.data.xRot = false;
        var xHandle = document.querySelector('#handleImgX');
        xHandle.setAttribute('src','#handle-xu')

     }

     var rotateY = function(){
        this.data.yRot = true;
        var yHandle = document.querySelector('#handleImgY');
        yHandle.setAttribute('src','#handle-ys')

     }

     var stopRotateY = function(){
        this.data.yRot = false;
        var yHandle = document.querySelector('#handleImgY');
        yHandle.setAttribute('src','#handle-yu')

     }

     var rotateZ = function(){
        this.data.zRot = true;
        var zHandle = document.querySelector('#handleImgZ');
        zHandle.setAttribute('src','#handle-zs')

     }

     var stopRotateZ = function(){
        this.data.zRot = false;
        var zHandle = document.querySelector('#handleImgZ');
        zHandle.setAttribute('src','#handle-zu')

     }
        
     var makeHandlesRotate = function(){
         var plane = document.createElement('a-plane');
         plane.setAttribute('id','handleImgX');
         plane.setAttribute('height','0.226');
         plane.setAttribute('width','0.417');
         plane.setAttribute('position','1 0 0');
         plane.setAttribute('rotation','0 0 0');
         plane.setAttribute('material','src:#handle-xu; alphaTest:0.5');
         object.appendChild(plane);
         var plane2 = document.createElement('a-plane');
         plane2.setAttribute('id','handleImgY');
         plane2.setAttribute('height','0.416');
         plane2.setAttribute('width','0.226');
         plane2.setAttribute('position','0 1 0');
         plane2.setAttribute('rotation','0 0 0');
         plane2.setAttribute('material','src:#handle-yu; alphaTest:0.5');
         object.appendChild(plane2);
         var plane3 = document.createElement('a-plane');
         plane3.setAttribute('id','handleImgZ');
         plane3.setAttribute('height','0.345');
         plane3.setAttribute('width','0.188');
         plane3.setAttribute('position','0.7 0.7 0');
         plane3.setAttribute('rotation','0 0 0');
         plane3.setAttribute('material','src:#handle-zu; alphaTest:0.5');
         object.appendChild(plane3);

         
        
     }

     btns[1].addEventListener('click', makeHandles);
    }

   


});