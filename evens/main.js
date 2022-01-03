var app = new Vue ({
    el : '#app',
    data : {
        counter : 0,
        ClientX : 0,
        ClientY : 0,
    },
    methods : {
        handleClick(number,e){
            console.log('Đã click',e.target);
            this.counter += number;
        },
        handleMouseMove(e){
            this.ClientX = e.clientX;
            this.ClientY = e.clientY;
        }
    }
})