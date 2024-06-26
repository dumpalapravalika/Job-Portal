import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FaLine } from "react-icons/fa";
import { SiMcafee } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { SiAdobeacrobatreader } from "react-icons/si";

const Jobs = () => {
    return (
        <div>
            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

            {/*job1 ==> web developer*/}

                <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Web Developer</h1>
                        <span className='flex iems-center text-[#ccc] gap-1'>
                            <BiTimeFive/>Now
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Lorem ipsum, dolor sit amet consectour adipisicing elit, Corrpti, laboriosam!
                    </p>

                    <div className='company flex items-center gap-2'>
                        <img src='' alt='' className=''/>
                        <FaLine color="green" size="40px" />
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Novac Linus Co.</span>
                    </div>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                        Apply now
                    </button>

                </div>

                {/*job2 ==> ui/ux*/}
                <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>UI/UX</h1>
                        <span className='flex iems-center text-[#ccc] gap-1'>
                            <BiTimeFive/>14Hrs
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>New York</h6>

                    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                    Microsoft is hiring! Join us to innovate and shape the future of technology together                    </p>

                    <div className='company flex items-center gap-2'>
                        <img src='' alt='' className=''/>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '40px', height: '40px' }}>
                        <div style={{ backgroundColor: '#F25022', width: '20px', height: '20px' }}></div>
                        <div style={{ backgroundColor: '#7FBA00', width: '20px', height: '20px' }}></div>
                        <div style={{ backgroundColor: '#00A4EF', width: '20px', height: '20px' }}></div>
                        <div style={{ backgroundColor: '#FFB900', width: '20px', height: '20px' }}></div>
                        </div>
                       
                         </div>
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Microsoft</span>
                    </div>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                        Apply now
                    </button>      
                </div>

                {/*job3 ==> Software Eng*/}

                    <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Software Eng</h1>
                        <span className='flex iems-center text-[#ccc] gap-1'>
                            <BiTimeFive/>10Hrs
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>Califonia</h6>


                    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                    McAfee is hiring! Join us to protect the digital world and inspire future cybersecurity innovations                    </p>

                    <div className='company flex items-center gap-2'>
                        <img src='' alt='' className=''/>
                        
                 <SiMcafee size="40px" color='red'/>
                
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Mcafee</span>
                    </div>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                        Apply now
                    </button>      

                </div>

                {/*job4 ==> productdesigner*/}

                <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Product designer</h1>
                <span className='flex iems-center text-[#ccc] gap-1'>
                <BiTimeFive/>10Hrs
            </span>
        </span>
        <h6 className='text-[#ccc]'>Austria</h6>

        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
         X is hiring! Join us to innovate, inspire, and shape the future together.</p>

        <div className='company flex items-center gap-2'>
            <img src='' alt='' className=''/>
            <FaXTwitter size="40px" />
    <span className='text-[14px] py-[1rem] block group-hover:text-white'>X</span>
    </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
         Apply now
        </button>      

                </div>

                {/* job5 ==> Researcher*/}

                <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Researcher</h1>
                <span className='flex iems-center text-[#ccc] gap-1'>
                <BiTimeFive/>5Hrs
            </span>
        </span>
        <h6 className='text-[#ccc]'>Norway</h6>

        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
        YouTube is hiring researchers! Join us to innovate, inspire, and shape the future of digital content</p>

        <div className='company flex items-center gap-2'>
            <img src='' alt='' className=''/>
            <IoLogoYoutube size="40px" color='red' />
    <span className='text-[14px] py-[1rem] block group-hover:text-white'>Youtube</span>
    </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
         Apply now
        </button>      

    </div>
            {/*job6 => lead developer*/}
            <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Lead Developer</h1>
                <span className='flex iems-center text-[#ccc] gap-1'>
                <BiTimeFive/>14Hrs
            </span>
        </span>
        <h6 className='text-[#ccc]'>UK</h6>

        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
        Apple is hiring lead developers! Join us to innovate, inspire, and shape the future of technology</p>

        <div className='company flex items-center gap-2'>
            <img src='' alt='' className=''/>
            <FaApple size="40px" color='grey' />
    <span className='text-[14px] py-[1rem] block group-hover:text-white'>Apple</span>
    </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
         Apply now
        </button>      

    </div>
            {/*job7=>UI Designer*/}
            <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>UI Designer</h1>
                <span className='flex iems-center text-[#ccc] gap-1'>
                <BiTimeFive/>14Hrs
            </span>
        </span>
        <h6 className='text-[#ccc]'>India</h6>

        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
        IBM is hiring UI designers! Join us to innovate and shape the future of user experiences</p>

        <div className='company flex items-center gap-2'>
            <img src='' alt='' className=''/>
            <SiIbm size="40px" color='blue' />
    <span className='text-[14px] py-[1rem] block group-hover:text-white'>IBM</span>
    </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
         Apply now
        </button>      

    </div>
            {/* job8=>Data analyst*/}
             <div className='group group[/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibond text-textColor group-hover:text-white font-bold'>Data Analyst</h1>
                <span className='flex iems-center text-[#ccc] gap-1'>
                <BiTimeFive/>7Hrs
            </span>
        </span>
        <h6 className='text-[#ccc]'>US</h6>

        <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
        Adobe is hiring data analysts! Join us to innovate and shape the future of data-driven insights</p>

        <div className='company flex items-center gap-2'>
            <img src='' alt='' className=''/>
            <SiAdobeacrobatreader size="40px" color='red' />
    <span className='text-[14px] py-[1rem] block group-hover:text-white'>Adobe</span>
    </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
         Apply now
        </button>      

    </div>
        

</div>

            

        </div>
    )
}

export default Jobs;