import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={`w-full h-32 bg-yellow-300 text-black font-semibold p-4 flex justify-around `}>

            <div>
                <ul className={`flex flex-col font-light`}>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div>
                <p>Social Media Handles</p>
                <ul className={`flex justify-between`}>
                    <li>
                        <a href="https://wa.me/233555530670">
                            <Image src="/social_icons/facebook.png" alt="facebook" width={20} height={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/233555530670">
                            <Image src="/social_icons/instagram.png" alt="instagram" width={20} height={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/233555530670">
                            <Image src="/social_icons/twitter.png" alt="twitter" width={20} height={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/233555530670">
                            <Image src="/social_icons/whatsapp.png" alt="whatsapp" width={20} height={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+233555530670">
                            <Image src="/social_icons/message.png" alt="message" width={20} height={20}/>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p>Copyright © 2021 Food Wars. All Rights Reserved.</p>
                <p className={`font-light text-gray-400`}><a className={`text-blue-500`} href="mailto:jameskekeli12@gmail.com">jameskekeli12@gmail.com</a></p>
                <p>Powered By <em className={`text-blue-500 font-semibold`}>Forkify API</em></p>
            </div>
        </footer>
    );
};

export default Footer;