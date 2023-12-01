import Image from "next/image";
import ukr from "@/public/ukr.png"

export default function header() {
    return (
        <div className="header"><Image className="flag" src={ukr} alt="ukraine flag" />
            Ukraine weather interactive map</div>
    )
}
