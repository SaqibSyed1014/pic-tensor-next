'use client'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
export default function ImageGallery({ generatedImageList, isLoading }) {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1280: 4}}>
            <Masonry gutter="24px 16px">
                {generatedImageList.map((image, index) => (
                    <ImageBox key={index} image={image} isLoading={isLoading} />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

function ImageBox({ image, isLoading }) {
    return (
        <div className="group">
            <div className={`relative rounded-[10px] p-1 ${isLoading ? 'bg-transparent' : 'bg-lime-dark group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-white/0 transition'}`}>
                <div className="relative rounded-[10px] overflow-hidden">
                    <img src={image.path} alt="" className={`w-full h-auto object-cover ${isLoading ? 'opacity-0':''}`}/>
                    {isLoading &&
                        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center loader-bg bg-black"></div>
                    }
                </div>

                { !isLoading && <div
                    className="absolute bottom-0 left-0 top-0 right-0 hidden group-hover:flex items-end bg-gradient-to-b from-white/0 to-black/75">
                    <div className="flex gap-3 p-3 pb-5">
                        <div className="shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M7.42681 1.40475C7.20976 0.964798 7.03376 0.895177 6.99825 0.884718C6.96293 0.895019 6.78455 0.964134 6.56347 1.40723C6.56333 1.40751 6.56319 1.40778 6.56306 1.40805L5.33321 3.8878C5.1707 4.22027 4.90839 4.49006 4.65303 4.68094C4.39661 4.87262 4.06587 5.04553 3.70874 5.10666L3.70566 5.10719L1.4731 5.48114C1.20735 5.52584 1.04614 5.59965 0.960033 5.65864C0.918394 5.68716 0.897122 5.71011 0.88735 5.72263C0.878411 5.73409 0.876717 5.73971 0.876547 5.74027C0.876452 5.74057 0.87443 5.74621 0.875156 5.76142C0.875927 5.77758 0.88011 5.80897 0.897676 5.85679C0.934008 5.95571 1.02264 6.11008 1.21297 6.30196L2.94897 8.05211C3.2271 8.33251 3.40285 8.6949 3.49784 9.02943C3.59294 9.36436 3.6332 9.76323 3.54807 10.1461L3.54677 10.152L3.04975 12.3185C2.96938 12.6686 2.97156 12.9022 2.99632 13.0357C3.00348 13.0743 3.01147 13.1003 3.01797 13.117C3.03592 13.1182 3.06335 13.118 3.10271 13.1131C3.23722 13.0961 3.45932 13.027 3.76669 12.8431L5.86621 11.5901C6.22316 11.3807 6.63625 11.3011 7.00188 11.3011C7.3666 11.3011 7.78113 11.3804 8.13799 11.5935C8.13787 11.5934 8.1381 11.5936 8.13799 11.5935L10.2303 12.8422C10.2301 12.8421 10.2304 12.8423 10.2303 12.8422C10.5402 13.0267 10.7644 13.0969 10.9002 13.1143C10.9379 13.1191 10.9646 13.1196 10.9826 13.1186C10.9888 13.102 10.9962 13.0768 11.0028 13.0404C11.0275 12.9061 11.0293 12.6711 10.9487 12.3182C10.9487 12.318 10.9487 12.3183 10.9487 12.3182L10.4504 10.1461C10.3653 9.76323 10.4056 9.36436 10.5007 9.02943C10.5957 8.6949 10.7714 8.33251 11.0495 8.05211L12.7876 6.29983C12.9793 6.10793 13.068 5.95387 13.1041 5.85581C13.1216 5.80844 13.1257 5.77756 13.1264 5.76194C13.1271 5.74766 13.1252 5.74232 13.1251 5.74193C13.125 5.74149 13.1233 5.73572 13.1141 5.72399C13.104 5.71121 13.0824 5.68799 13.0403 5.65922C12.9533 5.59977 12.7917 5.52593 12.5258 5.48121L10.2928 5.10719C9.9331 5.04674 9.59987 4.87474 9.34099 4.68216C9.08364 4.49073 8.82097 4.22056 8.65832 3.88785L7.42681 1.40475ZM9.44225 3.49599C9.61025 3.84179 10.0583 4.17347 10.4363 4.23698L12.6693 4.61101C14.0973 4.85095 14.4333 5.89539 13.4043 6.92572L11.6683 8.67588C11.3743 8.97227 11.2133 9.5439 11.3043 9.95321L11.8013 12.1197C12.1933 13.8346 11.2903 14.498 9.78525 13.6017L7.69225 12.3526C7.31425 12.1268 6.69125 12.1268 6.30625 12.3526L4.21325 13.6017C2.71525 14.498 1.80525 13.8275 2.19725 12.1197L2.69425 9.95321C2.78525 9.5439 2.62425 8.97227 2.33025 8.67588L0.594253 6.92572C-0.427747 5.89539 -0.0987471 4.85095 1.32925 4.61101L3.56225 4.23698C3.93325 4.17347 4.38125 3.84179 4.54925 3.49599L5.78125 1.0119C6.45325 -0.335998 7.54525 -0.335998 8.21025 1.0119L9.44225 3.49599Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <p className="text-sm leading-[22px]">{image.title}</p></div>
                </div>}
            </div>
            <div className="flex justify-end gap-4 pt-[18px] text-light">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className={isLoading ? 'opacity-0' : 'cursor-pointer'}>
                        <path
                            d="M6.12512 2.62603L6.56263 1.75101L7.43765 1.3135L6.56263 0.875994L6.12512 0.000976562L5.68761 0.875994L4.81259 1.3135L5.68761 1.75101L6.12512 2.62603ZM2.18754 4.37606L2.91654 2.91779L4.37509 2.18852L2.91654 1.45925L2.18754 0.000976562L1.45854 1.45925L0 2.18852L1.45854 2.91779L2.18754 4.37606ZM11.8127 7.87613L11.0837 9.3344L9.62519 10.0637L11.0837 10.7929L11.8127 12.2512L12.5417 10.7929L14.0003 10.0637L12.5417 9.3344L11.8127 7.87613ZM13.7438 2.57763L11.4236 0.257466C11.253 0.0862907 11.029 0.000976562 10.8051 0.000976562C10.5811 0.000976562 10.3572 0.0862907 10.1863 0.257466L0.256489 10.1873C-0.0853142 10.5291 -0.0853142 11.0831 0.256489 11.4246L2.57665 13.7448C2.74755 13.9157 2.9715 14.001 3.19518 14.001C3.41913 14.001 3.64308 13.9157 3.81398 13.7448L13.7438 3.81468C14.0856 3.47343 14.0856 2.91916 13.7438 2.57763ZM9.8289 5.56445L8.43681 4.17235L10.8048 1.80433L12.1969 3.19643L9.8289 5.56445Z"
                            fill="currentColor"/>
                    </svg>
                    {isLoading && <div className="absolute top-0 left-0 right-0 bottom-0 w-4 h-4 bg-loader-gradient rounded-[4px]"></div>}
                </div>
                <div className="relative hover:text-primary transition">
                    <div className={isLoading ? 'opacity-0' : 'cursor-pointer'}>
                        {image.isFavourite ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"
                             fill="none">
                            <path
                                d="M7.875 14.001C5.59125 13.231 0 9.84473 0 4.37598C0 1.96098 1.96 0.000976562 4.375 0.000976562C5.81 0.000976562 7.07875 0.692227 7.875 1.75098C8.67125 0.683477 9.94875 0.000976562 11.375 0.000976562C13.79 0.000976562 15.75 1.95223 15.75 4.37598C15.75 9.85348 10.1587 13.231 7.875 14.001Z"
                                fill="#D2FF3A"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path
                                d="M8.70508 15.001C6.42133 14.231 0.830078 10.8447 0.830078 5.37598C0.830078 2.96098 2.79008 1.00098 5.20508 1.00098C6.64008 1.00098 7.90883 1.69223 8.70508 2.75098C9.50133 1.68348 10.7788 1.00098 12.2051 1.00098C14.6201 1.00098 16.5801 2.95223 16.5801 5.37598C16.5801 10.8535 10.9888 14.231 8.70508 15.001Z"
                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                    </div>

                    {isLoading && <div className="absolute top-0 left-0 right-0 bottom-0 w-4 h-4 bg-loader-gradient rounded-[4px]"></div>}
                </div>
            </div>
        </div>
    )
}
