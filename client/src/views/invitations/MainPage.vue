<script>
    export default{}
</script>

<template>
    <div id='rizcahelmi' className='App'>
      <header className="undangan-header">        
        <div className='bg-slate-100 bg-opacity-60 brightness-50 w-screen h-screen z-0 absolute'></div>
        <Salju/>
        <h4 className='font-secondary text-primary font-light -translate-y-5 mb-9 z-10'>THE WEDDING OF</h4>
        <h1 className='text-primary font-primary -translate-y-5 text-7xl z-10 transform-gpu'>
            Hancock <br/>&<br/> Luffy
        </h1>                
      </header>  
      <div className='z-20 relative'>
        
        <!-- Second Section -->
        <div className="App">
            <div className='secondpg'>
                <Fade bottom>
                    <div className='py-6'>
                    <h1>Save Our Special Date</h1>
                    </div>
                </Fade>          
                <div className='bg-[#64748b] text-[#e5e5e5] text-4xl md:text-6xl -translate-y-3 mx-36 md:mx-[700px] rounded-md'>
                    <hr/>
                    <h1 className='font-semibold'>26<br/>May</h1>
                </div>          
                <div className='flex grid-rows-3 gap-11 items-center justify-center -translate-y-[72px] md:-translate-y-[85px]'>     
                    <Fade right>
                    <div className='text-2xl'>
                        <hr className='bg-black w-24 mb-1 z-0 border-slate-400'/>
                        <h1>Thursday</h1>
                        <hr className='bg-black w-24 mt-1 z-0 border-slate-400'/>
                    </div>
                    </Fade>
                    <div className='md:w-[29px] mx-7'></div>
                    <Fade left>
                    <div className='text-2xl'>
                        <hr className='bg-black w-24 mb-1 z-0 border-slate-400'/>
                        <h1>2022</h1>
                        <hr className='bg-black w-24 mt-1 z-0 border-slate-400'/>
                    </div> 
                    </Fade>           
                </div>          
                <img className='-translate-y-[123px] md:hidden relative z-30' src='./assets/flower.png' alt='flower'/>          
            </div>      
        </div>
        
        <!-- Third Section -->
        <div class="App">
            <div id='namarizcahelmi' class='thirdpg'>
                <div class='-mt-9 md:-mt-14'>
                    <Fade bottom>
                    <!-- <h1 class='mt-11'>Bismillahirrahmanirrahim</h1> -->
                    <p class='text-base font-light mx-2'>
                        Assalamu'alaikum Warahmatullaahi Wabaraakatuh<br/>
                        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
                    </p>
                    </Fade>
                </div>      
                
                <div class='flex flex-wrap mt-11 translate-y-11'>
                    <Fade right>
                    <p class='text-amber-800 px-5 translate-y-1 md:translate-y-5 mx-auto font-primary text-3xl md:text-5xl md:mr-5 font-semibold leading-none'>
                        Boa Hancock  
                        <p className='text-black font-secondary font-light -translate-y-3 text-sm md:text-xl mx-5 md:mx-0 text-center md:text-right mb-3'>                                                        
                            <br/>Ratu Bajak Laut
                        </p>                      
                    </p>  
                    </Fade>        
                    <img class='rounded-full mx-auto w-28 md:w-44 h-28 md:h-44 shadow-2xl' alt='CPW' src='./assets/hancock.jpg'/>
                </div>

                <p class='text-5xl text-amber-700 font-primary py-3 md:py-0 translate-y-9'>&</p>
                
                <div class='flex flex-wrap md:mt-4 mx-2 translate-y-11'>
                    <img class='rounded-full mx-auto w-28 md:w-44 h-28 md:h-44 shadow-2xl' alt='CPP' src='./assets/luffy.png'/>
                    <Fade left>
                    <p class='text-amber-800 px-5 md:translate-y-5 text-left mx-auto font-primary text-3xl mt-6 md:text-5xl md:ml-5 font-semibold leading-none'>
                        Monkey D Luffy  
                        <p className='text-black font-secondary font-light -translate-y-3 text-sm md:tracking-normal md:text-xl mx-5 md:mx-0 text-center md:text-left'>                                      
                            <br/>Raja Bajak Laut
                        </p>                      
                    </p>
                    </Fade>
                </div>                           
            </div>
            </div>

        <!-- DateAndLocation Section -->
        <div>
            <div id='tanggalrizcahelmi' className='dateandlocation'>
            <img src='./assets/breakPage.png' alt='breakPage' className='h-44 -translate-y-16 md:-translate-y-14 md:hidden'/>
                <div className='-translate-y-5 md:translate-y-16'>
                    <Fade bottom><h1 className='text-2xl md:text-4xl font-semibold text-slate-700 tracking-widest'>Kamis, 26 Mei 2022</h1></Fade>
                    <div className='flex grid-rows-3 gap-5 md:gap-14 items-center justify-center text-lg md:text-2xl text-slate-700 my-4'>
                        <Fade right><h1>Akad<br/>09.00 - 10.00 WIB</h1></Fade>
                        <span className='bg-[#64748b] w-[2px] h-9'><span className='opacity-0'>.</span></span>
                        <Fade left><h1>Resepsi<br/>11.00 - 15.00 WIB</h1></Fade>
                    </div>                        
                    <Fade>
                        <div className='text-lg md:text-2xl font-normal text-slate-700 tracking-widest leading-tight mb-4'>
                        <h1>Masjid Al-Akhyar</h1>
                        <h1>
                            Cawang, Jakarta Timur
                        </h1>
                        </div>
                    </Fade>
                    <OpenLocation/>            
                </div>                              
            </div>
        </div>

        <!-- Footer -->
        <div className='-mt-[14px] w-screen h-40 bg-[#64748b] text-white pb-5'>
            <img src='./assets/transisi.png' alt='transisi' className='h-40 md:h-48 w-screen -translate-y-36 md:-translate-y-48'/>
            <div className='-mt-32'>        
                <h1 className='mx-auto'>Made With Love by Helmi Arief Muhammad</h1>                    
            </div>
            <div className='flex justify-evenly my-3'>     
            <div className='flex'>
                <img src='./assets/ig.png' alt='breakPage' className='h-6 w-6 mr-1 md:-translate-y-14 md:hidden'/>
                <a href='https://www.instagram.com/rizca.widya/' target='_blank' rel="noreferrer">
                <h1>rizca.widya</h1>
                </a>
            </div>
            <div className='flex'>
                <img src='./assets/ig.png' alt='breakPage' className='h-6 w-6 mr-1 md:-translate-y-14 md:hidden'/>
                <a href='https://www.instagram.com/helmiam05/' target='_blank' rel="noreferrer">
                <h1>helmiam05</h1>
                </a>
            </div>     
            </div>
        </div>
      </div>      
      <!-- <Navigasi/> -->
    </div>
</template>