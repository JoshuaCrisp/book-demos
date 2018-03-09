AFRAME.registerComponent('drag-rotate-x',{
  schema : { 
    speed : {type: 'number',default:800},
    mousedown : {type: 'boolean',default:false},
    x_cord:{type: 'number', default: 0}
},

  init : function(){
    var handleImgX = document.querySelector('#rotHandleImgX');
    var poleX = document.querySelector('#rotPoleImgX');
    var camera = document.querySelector('#camera');
    var wireframe = document.querySelector('#wireframe');


  var mousedown = function(){
      this.setAttribute('drag-rotate-x',{mousedown:true, x_cord: currentXpos});
  }

  var mouseup = function(){
    this.setAttribute('drag-rotate-x',{mousedown:false, x_cord: currentXpos});
  }

  var onMouseOver = function(){
    poleX.setAttribute('visible', true);
    this.setAttribute('model-opacity', '1');
    }

  var onMouseOff = function(){
    
    this.setAttribute('model-opacity', '0.7');{
    }
  }

  handleImgX.addEventListener('mouseenter',onMouseOver);
  handleImgX.addEventListener('mouseleave',onMouseOff);
  handleImgX.addEventListener('mousedown',mousedown);
  handleImgX.addEventListener('mouseup',mouseup);
  },

  tick: function(){
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
      var poleY = document.querySelector('#rotPoleImgY');
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
      poleY.setAttribute('visible', true);
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
        var poleZ = document.querySelector('#rotPoleImgZ');
        var camera = document.querySelector('#camera');
        var wireframe = document.querySelector('#wireframe');
    
    
      var mousedown = function(){
        this.setAttribute('drag-rotate-z',{mousedown:true, x_cord: currentXpos});
      }
    
      var mouseup = function(){
        this.setAttribute('drag-rotate-z',{mousedown:false, x_cord: currentXpos});
      }
    
      var onMouseOver = function(){
        poleZ.setAttribute('visible', true);
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

  
  