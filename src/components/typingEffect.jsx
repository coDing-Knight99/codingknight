import { ReactTyped } from "react-typed";  
const MyComponent = () => {
  const handleResume = ()=>{  
    window.open('https://drive.google.com/uc?export=download&id=1XKgBWaYKOWVcE2l0v0TO_QPzvIHeNxDy','_blank');
  }

  return(

  <div className="bg-transparent mt-30">
    <ReactTyped strings={["Hey there,"]} typeSpeed={40} showCursor={false} className="xl:text-6xl text-4xl text-[#00FFFF] " />
    <br />
    <br />
    <ReactTyped strings={["Myself"]} typeSpeed={40} showCursor={false} className="xl:text-5xl text-4xl text-white " />
    <br/>
    <ReactTyped
      strings={[
        "# Dhruv Kanojia",
        "# Software Engineer",
        "# Full Stack Developer",
        "# DSA Enthusiast",
        "# CP Enthusiast",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className="font-inter md:text-5xl text-red-600 text-3xl"
    >
      <input type="text" />
    </ReactTyped>
    <br/>
    <div className="lg:w-[30%] w-[35%] md:h-[9%] h-[20%]  lg:my-10 my-5 p-1 border border-[#00FFFF] rounded-4xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all" onClick={()=>{handleResume()}}>
      <div className="w-[98%] h-[98%] text-center flex items-center justify-center lg:text-2xl md:text-xl sm:text-lg text-black rounded-4xl bg-[#00FFFF] font-medium hover:bg-black hover:text-[#00FFFF] transition-all"> Resume </div>
    </div>
  </div>
);
}

export { MyComponent };