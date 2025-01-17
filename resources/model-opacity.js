AFRAME.registerComponent('model-opacity', {
    schema: {default: 0},
    init: function () {
      this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update: function (oldData) {
      var mesh = this.el.getObject3D('mesh');
      console.log ("Here is the mesh");
      console.log (mesh);
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