/* This component is neccesary to add opacity to a gltf model. It is attached to the jay model in grid.html
so that he can fade in. It is also added  as an attribute to the rotation and scale handles (which are also
gltf models) by the "getMaterials" function of the "make-primitives" component */


AFRAME.registerComponent('model-opacity', {
    schema: {default: 0},
    init: function () {
      this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update: function (oldData) {
      var mesh = this.el.getObject3D('mesh');
      var data = this.data;
      if (!mesh) { return; }
      mesh.traverse(function (node) {
        if (node.isMesh) {
          node.material.opacity = data;
          node.material.transparent = data < 1.0;
          node.material.needsUpdate = true;
        }
      });
      
    }

  
  });