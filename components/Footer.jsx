import react from "react";

const Footer = () => {
    return(
        <div className="border-t-1 shadow-lg border-prim-gray-3">
            <p className="text-center font-poppins font-bold text-xl my-5">VIET NGUYEN FOODS COMPANY LIMITED (VNFOODSCO)</p>
            <ul className="flex flex-row justify-center items-center pb-5">
                <li className="mx-5">Tel/Fax: +84-2838109527</li>
                <li className="mx-5">Mobile: +84 90 8626482</li>
                <li className="mx-5">VAT code: 0311554970</li>
                <li className="mx-5">Website : vnfoodsco.com</li>
                <li className="mx-5">Email: info@vnfoodsco.com</li>
            </ul>
        </div>
    )
}

export default Footer;