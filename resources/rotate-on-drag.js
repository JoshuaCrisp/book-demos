/* This .js file contains the three components that are added to the rotation handles by the
"playRotate" function in the "manipulation-button-caller" component. They are identicle except
for the axis that they manipulate and whether they are referencing the global variables
"currentXpos" or "currentYpos", so only the fist one is commented. They really should be one
single component, but I was up against a deadline, and this was easier */  

AFRAME.registerComponent('drag-rotate-x',{
  schema : { 
    speed : {type: 'number',default:800},
    mousedown : {type: 'boolean',default:false},
    x_cord:{type: 'number', default: 0}
},

  init : function(){
    var handleImgX = document.querySelector('#rotHandleImgX');
    var camera = document.querySelector('#camera');
    var wireframe = document.querySelector('#wireframe');

  /* Function set this.data. mousedown to true and set this.data.x_cord to the
  current value of the global variable "currentXpos" continuously while the
  mouse is down */

  var mousedown = function(){
      this.setAttribute('drag-rotate-x',{mousedown:true, x_cord: currentXpos});
  }

  //Function to set this.data.mouseDown to false when the mouse button is released;
  var mouseup = function(){
    this.setAttribute('drag-rotate-x',{mousedown:false, x_cord: currentXpos});
  }

  // Function to set the opacity of the handle to 1(full opacity) when hovered over
  var onMouseOver = function(){
    this.setAttribute('model-opacity', '1');
    }

   // Function to set the opacity of the handle to 0.7(slightly transluscent when not hovered over

  var onMouseOff = function(){
    this.setAttribute('model-opacity', '0.7');{
    }
  }

  // Adding event listeners that call these functins
  handleImgX.addEventListener('mouseenter',onMouseOver);
  handleImgX.addEventListener('mouseleave',onMouseOff);
  handleImgX.addEventListener('mousedown',mousedown);
  handleImgX.addEventListener('mouseup',mouseup);
  },

  tick: function(){
    
    /* If the mouse is down after clicking on the rotation handle, rotate the x-axis by a number
    determined by measuring how far the mouse is from the position it was at when the handle
    was clicked (as determined by this.data.x_cord.) Then updatethis.data.x_cord to the current
    xPosition of th empuse so that it doesn't keep rotating just because the mouse is still down.
    This way you have to be actively dragging to affect the rotation */

    if(this.data.mousedown){
      var handleImgX = document.querySelector('#rotHandleImgX');
      var mesh = document.querySelector('.mesh');
      currentRotation = mesh.getAttribute('rotation');
      var temp_x = currentXpos - this.data.x_cord;
      mesh.setAttribute('rotation', {x: currentRotation.x + (temp_x*this.data.speed/1000), y: currentRotation.y, z: currentRotation.z});
      handleImgX.setAttribute('drag-rotate-x',{mousedown:true, x_cord: currentXpos});
    }
  }

  });

  AFRAME.registerComponent('drag-rotate-y',{
    schema : { 
      speed : {type: 'number',default:800},
      mousedown : {type: 'boolean',default:false},
      x_cord:{type: 'number', default: 0}
  },
  
    init : function(){
      var handleImgY = document.querySelector('#rotHandleImgY');
      var camera = document.querySelector('#camera');
      var wireframe = document.querySelector('#wireframe');
  
  
    var mousedown = function(){
      this.setAttribute('drag-rotate-y',{mousedown:true, x_cord: currentXpos});
    }
  
    var mouseup = function(){
      this.setAttribute('drag-rotate-y',{mousedown:false, x_cord: currentXpos});
      this.x_cord = currentXpos;
    }
  
    var onMouseOver = function(){
      this.setAttribute('model-opacity', '1');
      }
  
    var onMouseOff = function(){
      
      this.setAttribute('model-opacity', '0.7');{
      }
    }
  
    handleImgY.addEventListener('mouseenter',onMouseOver);
    handleImgY.addEventListener('mouseleave',onMouseOff);
    handleImgY.addEventListener('mousedown',mousedown);
    handleImgY.addEventListener('mouseup',mouseup);
    },
  
    tick: function(){
      if(this.data.mousedown){
        var handleImgY = document.querySelector('#rotHandleImgY');
        var mesh = document.querySelector('.mesh');
        currentRotation = mesh.getAttribute('rotation');
        var temp_x = currentXpos - this.data.x_cord;
        mesh.setAttribute('rotation', {x: currentRotation.x , y: currentRotation.y + (temp_x*this.data.speed/1000), z: currentRotation.z});
        handleImgY.setAttribute('drag-rotate-y',{mousedown:true, x_cord: currentXpos});
      }
    }
  
    });

    AFRAME.registerComponent('drag-rotate-z',{
      schema : { 
        speed : {type: 'number',default:800},
        mousedown : {type: 'boolean',default:false},
        x_cord:{type: 'number', default: 0}
    },
    
      init : function(){
        var handleImgZ = document.querySelector('#rotHandleImgZ');
        var camera = document.querySelector('#camera');
        var wireframe = document.querySelector('#wireframe');
    
    
      var mousedown = function(){
        this.setAttribute('drag-rotate-z',{mousedown:true, x_cord: currentXpos});
      }
    
      var mouseup = function(){
        this.setAttribute('drag-rotate-z',{mousedown:false, x_cord: currentXpos});
      }
    
      var onMouseOver = function(){
        this.setAttribute('model-opacity', '1');
        }
    
      var onMouseOff = function(){
        
        this.setAttribute('model-opacity', '0.7');{
        }
      }
    
      handleImgZ.addEventListener('mouseenter',onMouseOver);
      handleImgZ.addEventListener('mouseleave',onMouseOff);
      handleImgZ.addEventListener('mousedown',mousedown);
      handleImgZ.addEventListener('mouseup',mouseup);
      },
    
      tick: function(){
        if(this.data.mousedown){
          var handleImgZ = document.querySelector('#rotHandleImgZ');
          var mesh = document.querySelector('.mesh');
          currentRotation = mesh.getAttribute('rotation');
          var temp_x = currentXpos - this.data.x_cord;
          mesh.setAttribute('rotation', {x: currentRotation.x , y: currentRotation.y, z: currentRotation.z + (temp_x*this.data.speed/1000)});
          handleImgZ.setAttribute('drag-rotate-z',{mousedown:true, x_cord: currentXpos});
        }
      }
    
      });

  
  