import acds from "./assets/acds.png";
import department from "./assets/department.png";
import nsbm from "./assets/nsbm.png";
import codebell from "./assets/codebell.png";
import afsaan from "./assets/afsaan.png";
import datadive from "./assets/datadive.png";
function Footer() {
  return (
    <div className="absolute bottom-5 flex items-center gap-5 bg-white/80 py-2 px-10 rounded-3xl shadow-lg">
      <img className="footer-img" src={nsbm} alt="" />
      <img className="w-[120px]" src={acds} alt="" />
      <img className="w-[120px]" src={department} alt="" />
      <img className="w-[120px]" src={datadive} alt="" />
      <img className="footer-img" src={codebell} alt="" />
      <img className="footer-img" src={afsaan} alt="" />
    </div>
  );
}

export default Footer;
