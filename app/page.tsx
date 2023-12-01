import Image from 'next/image'

import cherkaska from "@/public/maps/cherkaska.svg"
import chernihivska from "@/public/maps/chernihivska.svg"
import chernivetska from "@/public/maps/chernivetska.svg"
import dnipropetrovska from "@/public/maps/dnipropetrovska.svg"
import donetska from "@/public/maps/donetska.svg"
import ivanofrankivska from "@/public/maps/ivanofrankivska.svg"
import kharkivska from "@/public/maps/kharkivska.svg"
import khersonska from "@/public/maps/khersonska.svg"
import khmelnytska from "@/public/maps/khmelnytska.svg"
import kirovohradska from "@/public/maps/kirovohradska.svg"
import krym from "@/public/maps/krym.svg"
import kyiv from "@/public/maps/kyiv.svg"
import kyivska from "@/public/maps/kyivska.svg"
import luhanska from "@/public/maps/luhanska.svg"
import lvivska from "@/public/maps/lvivska.svg"
import mykolaivska from "@/public/maps/mykolaivska.svg"
import odeska from "@/public/maps/odeska.svg"
import poltavska from "@/public/maps/poltavska.svg"
import rivnenska from "@/public/maps/rivnenska.svg"
import sevastopol from "@/public/maps/sevastopol.svg"
import sumska from "@/public/maps/sumska.svg"
import ternopilska from "@/public/maps/ternopilska.svg"
import vinnytska from "@/public/maps/vinnytska.svg"
import volynska from "@/public/maps/volynska.svg"
import zakarpatska from "@/public/maps/zakarpatska.svg"
import zaporizka from "@/public/maps/zaporizka.svg"
import zhytomyrska from "@/public/maps/zhytomyrska.svg"
/*
/**|======================================
/**| code
/**|======================================
*/
export default function Home() {
  return (
    <main>
      <div className="map">
        <Image className="region" src={cherkaska} alt="cherkaska" />
        <Image className="region" src={chernihivska} alt="chernihivska" />
        <Image className="region" src={chernivetska} alt="chernivetska" />
        <Image className="region" src={dnipropetrovska} alt="dnipropetrovska" />
        <Image className="region" src={donetska} alt="donetska" />
        <Image className="region" src={ivanofrankivska} alt="ivanofrankivska" />
        <Image className="region" src={kharkivska} alt="kharkivska" />
        <Image className="region" src={khersonska} alt="khersonska" />
        <Image className="region" src={khmelnytska} alt="khmelnytska" />
        <Image className="region" src={kirovohradska} alt="kirovohradska" />
        <Image className="region" src={krym} alt="krym" />
        <Image className="region" src={kyiv} alt="kyiv" />
        <Image className="region" src={kyivska} alt="kyivska" />
        <Image className="region" src={luhanska} alt="luhanska" />
        <Image className="region" src={lvivska} alt="lvivska" />
        <Image className="region" src={mykolaivska} alt="mykolaivska" />
        <Image className="region" src={odeska} alt="odeska" />
        <Image className="region" src={poltavska} alt="poltavska" />
        <Image className="region" src={rivnenska} alt="rivnenska" />
        <Image className="region" src={sevastopol} alt="sevastopol" />
        <Image className="region" src={sumska} alt="sumska" />
        <Image className="region" src={ternopilska} alt="ternopilska" />
        <Image className="region" src={vinnytska} alt="vinnytska" />
        <Image className="region" src={volynska} alt="volynska" />
        <Image className="region" src={zakarpatska} alt="zakarpatska" />
        <Image className="region" src={zaporizka} alt="zaporizka" />
        <Image className="region" src={zhytomyrska} alt="zhytomyrska" />
      </div>
    </main>
  )
}
