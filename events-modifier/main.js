var app = new Vue ({
    el : '#app',
    data : {
        counter : 0,
        ClientX : 0,
        ClientY : 0,
    },
    methods :{
        handleMouseMove(e){
            console.log('Box cha',e);
            this.ClientX = e.clientX;
            this.ClientY = e.clientY;
        },
        handleSubmitForm(e){
            console.log(e);
            // e.preventDefault(); //câu lệnh này có tác dụng ngăn chặn việc chuyển hướng sang trang khác sau khi submit
        },
        //sự kiện ngăn chặn phần tử đó lan tỏa ra phần tử cha
        handleMouseMoveChild(e){
            // e.stopPropagation()
            console.log('box-2',e.target)
        }
    }
})