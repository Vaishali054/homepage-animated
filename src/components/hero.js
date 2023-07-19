import React,{useState,useEffect} from 'react'

export default function Hero() {

    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 5000);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <section className='hero'>

    <div className='container web-responsive '>
        <div className='hero-details'>

        <h1 className='hero-text bounce-left'>
            Discover.Connect.<br className='responsive mobile-show'/>Colaborate
        </h1>
        <h3 className='hero-tagline bounce-left-tagline'>
            An ecosystem for Social media influencers and brands
        </h3>
        <div className='hero-buttons'>
            <div className='button fadeInUp'>
               
                I'M an Influencer
                 
            </div>
            <div className='button fadeInUp'>
               
                I'M a Brand
                
            </div>
            
        </div>
        </div>
        <div className='center'>

        <img className={`hero-img fade ${isAnimationComplete ? 'opacity-visible' : ''}`} src='https://www.freeskout.com/img/top-influencer-profiles/top-3.png'/>
        </div>
    </div>
    </section>
  )
}
