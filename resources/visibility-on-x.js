AFRAME.registerComponent('visibility-on-x', {
    schema: {
        target: {type: 'string', default:'#camera'},
    },



    tick: function(){
        var el = this.el;
        var target = document.querySelector(this.data.target);
        var targetRotation = target.getAttribute('rotation');
        var xRot = targetRotation.x;
        var opacity = el.getAttribute('opacity');

        if( xRot >= 40){
            el.setAttribute('opacity',(xRot-40)* .060);
            if(opacity > 1){
                el.setAttribute('opacity',1);
            }
        } else {
            el.setAttribute('opacity',0);
        }


        

    }

});


