AFRAME.registerComponent('slide-out-on-hover', {
    schema: {
      startPosition: {type: 'string', default: '0 0 0'},
      direction: {type:'string', default: "right"},
      speed: {type: 'number', default: 1000.0},
      distance: {type: 'number', default: 2.0},
      start:{type: 'boolean', default: false},
    },

    init: function () {
      var data = this.data;
      var el = this.el; 
      this.directionVec3 = new THREE.Vector3();
      this.el.addEventListener('mouseenter', function () {
        this.el.setAttribute('start', true);
      }
      )},


    tick: function (time, timeDelta){

        var direction = this.data.direction;
        var distance = this.data.distance;
        var currentPosition = this.el.position;
        console.log(currentPosition);
        var targetPosition;
        

        if (direction == "top"){
          targetPosition = {x: 0, y:distance, z: 0};
        } else if (direction == "bottom"){
          targetPosition = {x: 0, y:-(distance), z: 0};
        } else if (direction == "left"){
          targetPosition = {x: -(distance), y:0, z: 0};
        } else {targetPosition = {x: distance, y:0, z: 0};}

        console.log(targetPosition);

        if(targetPosition == currentPosition){
          this.data.start = false;
          return;

        } else {
          
          var directionVec3 = this.directionVec3;
          directionVec3.copy(targetPosition).sub(currentPosition);
          var distance = directionVec3.length();

        }

      var factor = this.data.speed / distance;
      ['x', 'y', 'z']. forEach(function(axis){
          directionVec3[axis] *= factor * (timeDelta / 1000);
      });

      this.el.setAttribute('position',{
          x: currentPosition.x + directionVec3.x,
          y: currentPosition.y + directionVec3.y,
          z: currentPosition.z + directionVec3.z
      });
  },
  });