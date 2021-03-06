import React,{useEffect} from 'react';
import './style.css';
import useWebAnimations from "@wellyshen/use-web-animations";



export const RedQueen=()=>{


  const animations = React.useRef(1);
  
  //  const animated =useWebAnimations(animations);
    
   

//     const animations = React.useRef(null);

//     const animated =useWebAnimations(animations);

    

        const sceneryFrames = [
        { transform: "translateX(100%)" },
        { transform: "translateX(-100%)" },
        ];

        const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity,
        };

        const sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity,
        };

        const background1Movement=useWebAnimations({
            keyframes:sceneryFrames,
            timing:sceneryTimingBackground
        })
        

        const background2Movement = useWebAnimations({
          keyframes: sceneryFrames,
          timing: sceneryTimingBackground,
        });


        const foreground1Movement = useWebAnimations({
          keyframes: sceneryFrames,
          timing: sceneryTimingForeground,
        });


         const foreground2Movement = useWebAnimations({
           keyframes: sceneryFrames,
           timing: sceneryTimingForeground,
         });


         const spriteFrames=[
             {transform:'translateY(0)'},
             {transform:'translateY(-100%'}

         ]


         const redQueen_alice=useWebAnimations({
             keyframes:spriteFrames,
             timing:{
                 easing:'steps(7,end)',
                 direction:'reverse',
                 playbackRate:1,
                 duration:600,
                 iterations:Infinity
             }
         })

        //  const  goFaster=()=>{
        //      redQueen_alice.getAnimation().playbackRate *=1.2
        //  } 

 


        


  useEffect(() => {
    var playbackRateRQ = animations.current;
    var playbackRateBG = 0;
          
          const fgAnimation=foreground1Movement.getAnimation();
          console.log(fgAnimation)
          fgAnimation.currentTime=fgAnimation.effect.getTiming().duration/2

          const bgAnimation = background1Movement.getAnimation();
          bgAnimation.currentTime = bgAnimation.effect.getTiming().duration / 2


    const adjustBackgroundPlayback = () => {
      if (playbackRateRQ < 0.8) {

        playbackRateBG = (playbackRateRQ / 2) * -1;

      } else if (playbackRateRQ > 1.2) {

        playbackRateBG = (playbackRateRQ / 2);

      } else {

        playbackRateBG = 0;

      }
      foreground1Movement.getAnimation().playbackRate = playbackRateBG
      foreground2Movement.getAnimation().playbackRate = playbackRateBG
      background1Movement.getAnimation().playbackRate = playbackRateBG
      background2Movement.getAnimation().playbackRate = playbackRateBG

    };

      setInterval(()=>{
            if(playbackRateRQ > 0.4){
              
              playbackRateRQ *= 0.9;
              
              redQueen_alice.getAnimation().playbackRate = playbackRateRQ;
            }
            adjustBackgroundPlayback()
          },3000)

             document.addEventListener('click',()=>{
               playbackRateRQ +=1.1;
               redQueen_alice.getAnimation().playbackRate=playbackRateRQ;
               adjustBackgroundPlayback()
             })
  }, [redQueen_alice, background1Movement, background2Movement, foreground1Movement, foreground2Movement])




     return (
       <div className="wrapper">
         <div className="sky"></div>
         <div className="earth">
           <div id="red-queen_and_alice">
             <img
               id="red-queen_and_alice_sprite"
               src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
               srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
               alt="Alice and the Red Queen running to stay in place."
               ref={redQueen_alice.ref}
             />
           </div>
         </div>

         <div
           className="scenery"
           id="foreground1"
           ref={foreground1Movement.ref}
         >
           <img
             id="palm3"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
             alt=" "
           />
         </div>
         <div
           className="scenery"
           id="foreground2"
           ref={foreground2Movement.ref}
         >
           <img
             id="bush"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
             alt=" "
           />
           <img
             id="w_rook_upright"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
             alt=" "
           />
         </div>
         <div
           className="scenery"
           id="background1"
           ref={background1Movement.ref}
         >
           <img
             id="r_pawn_upright"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
             alt=" "
           />
           <img
             id="w_rook"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
             alt=" "
           />
           <img
             id="palm1"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
             alt=" "
           />
         </div>
         <div
           className="scenery"
           id="background2"
           ref={background2Movement.ref}
         >
           <img
             id="r_pawn"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
             alt=" "
           />

           <img
             id="r_knight"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
             alt=" "
           />
           <img
             id="palm2"
             src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
             srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
             alt=" "
           />
         </div>
       </div>
     );
 }
