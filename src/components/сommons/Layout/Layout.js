import logoSvg from "../../../assets/svg/logo.svg"
import mutedSvg from "../../../assets/svg/defaultX.svg"

import Logo from "./Logo/Logo";
import MutedButton from "./MutedButton/MutedButton";

export default function Layout({children}){
    const LayoutBucket = ({children}) => {
        return (
            <div className="w-1/3 flex grow-1">{children}</div>
        );
    }
    return (
        <div className="w-full min-h-[100vh] py-12 px-24 flex">
            {/*Layout Buckets*/}
            <LayoutBucket>
                <Logo src={logoSvg}>COMPANY NAME</Logo>
            </LayoutBucket>

            <LayoutBucket>
                {children}
            </LayoutBucket>

            <LayoutBucket>
                <div className="w-full flex justify-end">
                    <MutedButton src={mutedSvg}/>
                </div>
            </LayoutBucket>

        </div>
    );
}