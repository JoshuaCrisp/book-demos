var isXZplaced = false;

AFRAME.registerComponent('object-moveable', {
    schema: {

    },

    init: function () {
        var handleImgX = document.querySelector('#handleImgX');
        var handleImgY = document.querySelector('#handleImgY');
        var handleImgZ = document.querySelector('#handleImgZ');
        var container = document.querySelector('.container');
        var scene = document.querySelector('#scene');
        var wireframe = document.querySelector('.wireframe');

        handleImgX.setAttribute('visible', false);
        handleImgY.setAttribute('visible', false);
        handleImgZ.setAttribute('visible', false);
        
        var gridSquares = document.querySelectorAll(".gridify-element");

        var selected = function(){
            this.setAttribute('src', "#gridSquare-red");
            var sourcePosition = container.getAttribute('position');
            var targetPosition = this.getAttribute('position');
            container.setAttribute('position',
            {x:targetPosition.x, y:sourcePosition.y, z: -(targetPosition.y)});
        }


        var unselected = function(){
            this.setAttribute('src', "#gridSquare-white");
        }


        var placedXZ = function(){
            isXZplaced = true;
            for(var i = 0; i<gridSquares.length; i++){
                this.setAttribute('src', "#gridSquare-white");
                (function(){
                    gridSquares[i].removeEventListener('mouseenter', selected);
                    gridSquares[i].removeEventListener('mouseleave', unselected);
                    gridSquares[i].removeEventListener('click', placedXZ);
                    
                }());
            }
            scene.addEventListener('click', placedY);
            
        }

        var placedY = function(){
            for(var i = 0; i<gridSquares.length; i++){
                (function(){
                    scene.removeEventListener('click', placedY);
                }());
            }
            wireframe.removeAttribute('object-moveable');
        }

        

        for(var i = 0; i<gridSquares.length; i++){
            (function(){
                gridSquares[i].addEventListener('mouseenter', selected);
                gridSquares[i].addEventListener('mouseleave', unselected);
                gridSquares[i].addEventListener('click', placedXZ);
            }());
        }
        
        
    },

    tick: function(){
       
        if(isXZplaced){
            
            var camera = document.querySelector('#camera').getAttribute('rotation').x;
            var container = document.querySelector('.container');
            var containerPos = container.getAttribute('position');
            var height = (camera / (Math.abs(containerPos.x)+ Math.abs(containerPos.z)))
           
           if (height >= -1){
            container.setAttribute('position',{
                x: containerPos.x, y: height , z: containerPos.z
           });
        } 
           console.log(containerPos);

        }
        
    }

         
});