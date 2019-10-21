export class CarouselHolderComponent {
    //customOptions: {
        loop = false;
        margin = 20;
        mouseDrag = true;
        touchDrag =  true;
        pullDrag = true;
        dots = true;
        navSpeed = 700;
        navText = ['', ''];
        responsive = {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        };
        nav = true
    //}
}