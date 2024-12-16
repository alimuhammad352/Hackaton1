import Image from "next/image"
import pickologo3 from "@/app/About/Picko Logo(3).png"
import button1 from "@/app/About/Button(1).png"
export default function Page3(){
    return(
        <div className="w-[1440px] h-[3614px] mt-[-3750px] mx-[3250px] bg-[#F9F9F9]"> 
         <div className="w-[1440px] h-[206px] bg-black">
            <div className="w-[1200px] h-[78px] pt-[70px] flex"> 
                <div className="w-[1135px] h-[32px] font-bold text-lg mx-[100px] text-white">Buttons </div>
                <div className="w-[65px] h-[78px] "><Image src={pickologo3} alt='' /> </div>
                </div> 
                <div className="w-[260px] h-[48px] text-[36px] mt-[235px] mx-[76px] text-[#04060F]">👍 Small Button</div>
                <div className="w-[1307px] h-[3076px] mt-[20px] mx-[73px] border-[1px] border-[#3563E9]">
                <Image src={button1} alt='' />
                     </div>
                 </div>
        </div>
    )
}