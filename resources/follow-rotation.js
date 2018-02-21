AFRAME.registerComponent('follow-rotation', {
    schema: {
        target: {type: 'string', default:'#camera'},
        offset: {type: 'number', default: -20}
    },



    tick: function(){
        var target = document.querySelector(this.data.target);
        var targetRotation = target.getAttribute('rotation');
        var sourceRotation = this.el.getAttribute('rotation');
        var tRot1 = targetRotation.y;
        var sRotX = sourceRotation.x;
        var sRotZ = sourceRotation.z;
        this.el.setAttribute('rotation',
        {x: sRotX, y: tRot1 + this.data.offset, z:sRotZ});

    }

});


