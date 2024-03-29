import Logo from "/logo.png"
import fb from "/fb.png"
import insta from "/insta.png"
import ln from "/ln.png"

const Footer = () => {
    return <div className="mx-12 w-full">
        <footer className="bg-[#1f1f1f] w-full px-12">
            <div className="relative bottom-10 pt-28 md:pt-32 md:pb-1 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 md:justify-start items-start content-start">
                    <div className="px-10 pb-4">
                        <a href="https://ecelldtu.in/"><img src={Logo} height={"100"} width={"200"} alt={"logo"} className="" /></a>
                    </div>
                    <div className="px-10 py-4 md:py-0">
                        <h1 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Follow Us</h1>
                        <div className="flex flex-row gap-4 py-3 font-Para font-semibold">
                            <a href={'https://www.instagram.com/ecelldtu/'}>
                                <img width={40} height={50}
                                    src={insta}
                                    alt="insta logo"
                                    className="h-auto mr-4 scale-110 text-white cursor-pointer"
                                /></a>
                            <a href={'https://www.linkedin.com/company/ecelldtu/mycompany/'}>
                                <img width={40} height={50}
                                    src={ln}
                                    alt="linkedin logo"
                                    className="h-auto mr-4 scale-110 text-white cursor-pointer"
                                /></a>
                            <a href={'https://www.facebook.com/ECellDTU'}>
                                <img width={40} height={50}
                                    src={fb}
                                    alt="facebook logo"
                                    className="h-auto mr-4 scale-110 text-white cursor-pointer"
                                /></a>
                        </div>
                    </div>
                    <div className="px-10">
                        <h1 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Contact Us</h1>
                        <h4 className="py-1 md:text-base flex flex-col font-Para font-semibold">
                            <div>info@ecelldtu.in</div>
                            <div>Delhi Technological University</div>
                            <div>Shahbad Daulatpur, Main Bawana Road, Delhi-110042</div>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>

        <div className="flex flex-col border-t-2 bg-violet-900/80 py-5 font-semibold px-10 md:text-lg md:pb-6 text-white md:items-center md:flex-row md:justify-between">
            <div className="">
                © Copyright E-Cell DTU.
            </div>
            <div className="pt-3 pb-5">
                All <span className="text-primary-orange ">Rights</span> Reserved.
            </div>
        </div>
    </div>
};

export default Footer;