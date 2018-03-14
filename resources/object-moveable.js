AFRAME.registerComponent('object-moveable', {
    schema: {
        isXZplaced: {type: 'boolean', defult: false},
        mousedown: {type: 'boolean', defult: false},
        y_cord:{type: 'number', default: 0},
        speed : {type: 'number',default:10}
    },

    init: function () {

        var container = document.querySelector('.container');
        var scene = document.querySelector('#scene');
        var wireframe = document.querySelector('.wireframe');
        var jay = document.querySelector('#jayModel');

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
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:false, y_cord: currentYpos, speed: 10});
            for(var i = 0; i<gridSquares.length; i++){
                (function(){
                    gridSquares[i].removeEventListener('mouseenter', selected);
                    gridSquares[i].setAttribute('src', "#gridSquare-white");
                    gridSquares[i].removeEventListener('mouseleave', unselected);
                    gridSquares[i].removeEventListener('click', placedXZ);
                    
                    
                }());
            }
            wireframe.addEventListener('mousedown',onmousedown);
            wireframe.addEventListener('mouseup',onmouseup);

            if(tutMove2){
                tutMove2 = false;
                jay.setAttribute('animation-mixer','clip: talking;');
                jay.setAttribute('sound','src: #placement-y; autoplay: false;');
                jay.components.sound.playSound();    
            }
        }

        var onmousedown = function(){
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:true, y_cord: currentYpos, speed: 10});
        }

        var onmouseup = function(){
            wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:false, y_cord: currentYpos, speed: 10});
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
       
        if(this.data.isXZplaced && this.data.mousedown){
            var wireframe = document.querySelector('.wireframe');
            var y_cord = wireframe.getAttribute('object-moveable').y_cord;
            console.log(this.data.y_cord);
            console.log(y_cord);
            var container = document.querySelector('.container');
            var wireframe = document.querySelector('.wireframe');
            var containerPos = container.getAttribute('position');
            var temp_y = currentYpos - y_cord;
            console.log(temp_y);
            var height = containerPos.y - (temp_y*this.data.speed/1000);
           
           if (height >= -1){
            container.setAttribute('position',{
                x: containerPos.x, y: height , z: containerPos.z
           });
        } 
        wireframe.setAttribute('object-moveable', {isXZplaced:true, mousedown:true, y_cord: currentYpos, speed: 10});

        }
        
    },

    remove: function(){
        var wireframe = document.querySelector('.wireframe');
        wireframe.removeEventListener('mousedown',onmousedown);
        wireframe.removeEventListener('mouseup',onmouseup);

    }

         
});