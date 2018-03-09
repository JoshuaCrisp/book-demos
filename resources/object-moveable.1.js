var isXZplaced = false;
var isYplaced = false;

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
        var jay = document.querySelector('#jayModel');

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
            scene.addEventListener('click', readyPlaceY);
            
        }

        var readyPlaceY = function(){
            setTimeout(function(){scene.addEventListener('click', placedY);
            scene.removeEventListener('click', readyPlaceY);}, 1000);
            if(tutMove2){
                tutMove2 = false;
                jay.setAttribute('animation-mixer','clip: talking;');
                jay.setAttribute('sound','src: #placement-y; autoplay: false;');
                jay.components.sound.playSound();

            }
        }

        var walkAway = function(){
            var addBtn = document.querySelector('#addBtn');
            var btnText = document.querySelector('#btnText');
            addBtn.setAttribute('geometry-button-caller',{});
            btnText.setAttribute('value', "");
            addBtn.setAttribute('visible','true');
            
            jay.setAttribute('animation-mixer','clip: walk;');
            var turn = document.createElement('a-animation');

            var walkObject= document.createElement('a-animation');
            walkObject.setAttribute('attribute','position');
            walkObject.setAttribute('dur','28000');
            walkObject.setAttribute('easing','linear');
            walkObject.setAttribute('from','-2 -1 -3');
            walkObject.setAttribute('to','-28 -1 -3');
            walkObject.setAttribute('delay','1000');

            var turnObject= document.createElement('a-animation');
            turnObject.setAttribute('attribute','rotation');
            turnObject.setAttribute('dur','1500');
            turnObject.setAttribute('easing','linear');
            turnObject.setAttribute('from','0 30 0');
            turnObject.setAttribute('to','0 -55 0');
            jay.appendChild(turnObject);
            jay.appendChild(walkObject);

            jay.removeEventListener('sound-ended',walkAway);

            
        }

        var placedY = function(){
                        isXZplaced = false;
                        if(tutCreated){
                            tutCreated = false;
                        jay.setAttribute('animation-mixer','clip: talking;');
                        jay.setAttribute('sound','src: #created; autoplay: false;');
                        jay.components.sound.playSound();
                        jay.addEventListener('sound-ended', walkAway)
                        }
                        
                        scene.removeEventListener('click', readyPlaceY);
                        scene.removeEventListener('click', placedY);
                        wireframe.removeAttribute('object-moveable');
                        wireframe.setAttribute('class', 'object');
                        var container = document.querySelector('.container');
                        objectCount +=1;
                        console.log("objectCount = " + objectCount);
                        container.setAttribute('class','container'+objectCount);
                        

            }

        

        

        for(var i = 0; i<gridSquares.length; i++){
            (function(){
                gridSquares[i].addEventListener('mouseenter', selected);
                gridSquares[i].addEventListener('mouseleave', unselected);
                gridSquares[i].addEventListener('mouseup', placedXZ);
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