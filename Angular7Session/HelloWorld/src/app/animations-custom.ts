import { trigger, state, style, transition, animate, keyframes, animation } from "@angular/animations";



export let fadeInAnimation = animation([
    style({ opacity : 0}),
    animate('{{ duration }} {{ delay }} {{ easing }}')
], {
    params: {
        duration: '2000ms',
        delay : '',
        easing : 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    style({ opacity : 0}),
    animate('{{ duration }} {{ delay }} {{ easing }}')
], {
    params: {
        duration: '2000ms',
        delay : '',
        easing : 'ease-in'
    }
});


export let myFade =  trigger('validationMessages',[
    state('void', style({ opacity: 0})),
    transition(':enter, :leave',[
      animate(1000)
    ])
  ]);


  export let removeSlide =  trigger('removeSlide',[
    
    transition(':leave',[
        animate(700, style({ transform: 'translateX(-100px)' }))
    ])
  ]);

  export let removeSlideWithEase =  trigger('removeSlideWithEase',[
    
    transition(':leave',[
        animate('0.5s cubic-bezier(.18,.63,.84,.31)', style({ transform: 'translateX(-100px)' }))
    ])
  ]);

  export let removeSlideWithEaseAndKeyFrame =  trigger('removeSlideWithEaseAndKeyFrame',[
    
    transition(':leave',[
        animate('0.5s cubic-bezier(.18,.63,.84,.31)', keyframes([
            style({
                offset:.2,
                opacity:1,
                transform:'translateX(20px)'
            }),
            style({
                offset:1,
                opacity:0,
                transform:'translateX(-100%)'
            })
        ]))
    ])
  ]);




  
