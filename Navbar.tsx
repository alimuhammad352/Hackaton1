import Image from "next/image"
import pickologo from "@/app/About/Picko Logo.png"


export default function Navbar(){
    return(
        <div className="w-[1440px] h-[3828px] gap-[100px]">
            <div className="w-[1440px] h-[206px] bg-black">
             <div className="w-[1200px] h-[78px] pt-[70px] flex"> 
                <div className="w-[1135px] h-[32px] font-bold text-lg mx-[100px] text-white">Text Styles </div>
                <div className="w-[65px] h-[78px] "><Image src={pickologo} alt='' /> </div>
                </div>   
                 </div>
             
             </div>
    )
}