AFRAME.registerComponent('drag-scale-x',{
  schema : { 
    speed : {type: 'number',default:10},
    mousedown : {type: 'boolean',default:false},
    x_cord:{type: 'number', default: 0}
},

  init : function(){
    var scaleHandles = document.querySelector('.scaleHandles')
    var handleImgX = document.querySelector('#handleImgX');
    var rotHandleImgX = document.querySelector('#rotHandleImgX');
    var wireframe = document.querySelector('.wireframe');

    handleImgX.setAttribute('model-opacity', 0.5);


  var mousedown = function(){
      this.x_cord = currentXpos;
      this.setAttribute('drag-scale-x',{mousedown:true, x_cord: currentXpos});
  }

  var mouseup = function(){
    this.setAttribute('drag-scale-x',{mousedown:false});
  }

  var onMouseOver = function(){
    this.setAttribute('model-opacity', '1');
    }

  var onMouseOff = function(){
    
    this.setAttribute('model-opacity', '0.5');{
    }
  }

  handleImgX.addEventListener('mouseenter',onMouseOver);
  handleImgX.addEventListener('mouseleave',onMouseOff);
  handleImgX.addEventListener('mousedown',mousedown);
  handleImgX.addEventListener('mouseup',mouseup);
  },

  tick: function(){
    if(this.data.mousedown){
      var handleImgX = document.querySelector('#handleImgX');
      var rotHandleImgX = document.querySelector('#rotHandleImgX');
      var wireframe = document.querySelector('.wireframe');
      var arrowPos = handleImgX.getAttribute('position');
      currentScale = wireframe.getAttribute('scale');
      var temp_x = currentXpos - this.data.x_cord;
      handleImgX.setAttribute('position', {x:arrowPos.x + ((temp_x*this.data.speed/1000)/2), y: arrowPos.y, z: arrowPos.z});
      wireframe.setAttribute('scale', {x: currentScale.x + (temp_x*this.data.speed/1000), y: currentScale.y, z: currentScale.z});
      rotHandleImgX.setAttribute('position', {x:arrowPos.x + ((temp_x*this.data.speed/1000)/2), y: arrowPos.y, z: arrowPos.z});
      handleImgX.setAttribute('drag-scale-x',{mousedown:true, x_cord: currentXpos});
    }
  }
    
});

AFRAME.registerComponent('drag-scale-y',{
  schema : { 
    speed : {type: 'number',default:5},
    mousedown : {type: 'boolean',default:false},
    y_cord:{type: 'number', default: 0}
},

  init : function(){
    var scaleHandles = document.querySelector('.scaleHandles')
    var handleImgY = document.querySelector('#handleImgY');
    var rotHandleImgY = document.querySelector('#rotHandleImgY');
    var wireframe = document.querySelector('.wireframe');

    handleImgY.setAttribute('model-opacity', 0.5);


  var mousedown = function(){
      this.y_cord = currentYpos;
      this.setAttribute('drag-scale-y',{mousedown:true, y_cord: currentYpos});
  }

  var mouseup = function(){
    this.setAttribute('drag-scale-y',{mousedown:false});
  }

  var onMouseOver = function(){
    this.setAttribute('model-opacity', '1');
    }

  var onMouseOff = function(){
    
    this.setAttribute('model-opacity', '0.5');{
    }
  }

  handleImgY.addEventListener('mouseenter',onMouseOver);
  handleImgY.addEventListener('mouseleave',onMouseOff);
  handleImgY.addEventListener('mousedown',mousedown);
  handleImgY.addEventListener('mouseup',mouseup);
  },

  tick: function(){
    if(this.data.mousedown){
      var handleImgY = document.querySelector('#handleImgY');
      var rotHandleImgY = document.querySelector('#rotHandleImgY');
      var wireframe = document.querySelector('.wireframe');
      var arrowPos = handleImgY.getAttribute('position');
      currentScale = wireframe.getAttribute('scale');
      currentPos = wireframe.getAttribute('position');
      var temp_y = currentYpos - this.data.y_cord;
      handleImgY.setAttribute('position', {x:arrowPos.x, y: arrowPos.y - ((temp_y*this.data.speed/1000)), z: arrowPos.z});
      wireframe.setAttribute('scale', {x: currentScale.x, y: currentScale.y - (temp_y*this.data.speed/1000), z: currentScale.z});
      wireframe.setAttribute('position', {x: currentPos.x, y: currentPos.y - (temp_y*this.data.speed/1000)/2, z: currentPos.z});
      rotHandleImgY.setAttribute('position', {x:arrowPos.x, y: arrowPos.y - (temp_y*this.data.speed/1000), z: arrowPos.z});
      handleImgY.setAttribute('drag-scale-y',{mousedown:true, y_cord: currentYpos});
    }
  }
    
});

AFRAME.registerComponent('drag-scale-z',{
  schema : { 
    speed : {type: 'number',default:5},
    mousedown : {type: 'boolean',default:false},
    y_cord:{type: 'number', default: 0}
},

  init : function(){
    var scaleHandles = document.querySelector('.scaleHandles')
    var handleImgZ = document.querySelector('#handleImgZ');
    var rotHandleImgZ = document.querySelector('#rotHandleImgZ');
    var wireframe = document.querySelector('.wireframe');

    handleImgZ.setAttribute('model-opacity', 0.5);


  var mousedown = function(){
      this.y_cord = currentYpos;
      this.setAttribute('drag-scale-z',{mousedown:true, y_cord: currentYpos});
  }

  var mouseup = function(){
    this.setAttribute('drag-scale-z',{mousedown:false});
  }

  var onMouseOver = function(){
    this.setAttribute('model-opacity', '1');
    }

  var onMouseOff = function(){
    
    this.setAttribute('model-opacity', '0.5');{
    }
  }

  handleImgZ.addEventListener('mouseenter',onMouseOver);
  handleImgZ.addEventListener('mouseleave',onMouseOff);
  handleImgZ.addEventListener('mousedown',mousedown);
  handleImgZ.addEventListener('mouseup',mouseup);
  },

  tick: function(){
    if(this.data.mousedown){
      var handleImgZ = document.querySelector('#handleImgZ');
      var rotHandleImgZ = document.querySelector('#rotHandleImgZ');
      var wireframe = document.querySelector('.wireframe');
      var arrowPos = handleImgZ.getAttribute('position');
      currentScale = wireframe.getAttribute('scale');
      currentPos = wireframe.getAttribute('position');
      var temp_y = currentYpos - this.data.y_cord;
      handleImgZ.setAttribute('position', {x:arrowPos.x, y: arrowPos.y, z: arrowPos.z + ((temp_y*this.data.speed/1000)/2)});
      wireframe.setAttribute('scale', {x: currentScale.x, y: currentScale.y, z: currentScale.z  + (temp_y*this.data.speed/1000)});
      rotHandleImgZ.setAttribute('position', {x:arrowPos.x, y: arrowPos.y, z: arrowPos.z  + ((temp_y*this.data.speed/1000)/2)});
      handleImgZ.setAttribute('drag-scale-z',{mousedown:true, y_cord: currentYpos});
    }
  }
    
});
