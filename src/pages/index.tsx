import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Image from "next/image";

export default function Main() {
  return(
      <>
      <Navbar>    
      </Navbar>
      <div className={styles.brand_image}>
        <Image src='/main.webp' height={1200} width={1600} alt="image"></Image>
      </div>
      <div className="border-2 border-solid border-black text-center font-sans text-3xl py-6">
        <p className="text-3xl">QUIKFIX  COMPUTER SOLUTIONS PROVIDES FASTEST DELIVERY OF ANTIVIRUS KEY IN SECONDS</p>
        <p className="text-xl">Buy & Get instant delivery of licence key . Quick Heal, NetProtector, Kaspersky, K7, Escan, Norton, Bitdefender,Mcafee, Guardian antivirus Available</p>
      </div>
      <section id="product_category" className={styles.product_category}>
        <div id="title">
          PRODUCT CATEGORY
        </div>
        <div id="products" className={styles.products}>
          <div className="w-2/6 h-2/6">
            <Link legacyBehavior href='#'>
            <a>
            <Image src='/products/laptop.jpg' alt="laptop" height={150} width={150}></Image>
            </a>
            </Link>
          </div>
          <div className="w-2/6 h-2/6">
            product2
          </div>
          <div className="w-2/6 h-2/6">
            product3
          </div>
          <div className="w-2/6 h-2/6">
            product4
          </div>
          <div className="w-2/6 h-2/6">
            product5
          </div>
          <div className="w-2/6 h-2/6">
            product6
          </div>
          <div className="w-2/6 h-2/6">
            product7
          </div>
          <div className="w-2/6 h-2/6">
            product8
          </div>
          <div className="w-2/6 h-2/6">
            product9
          </div>
        </div>

      </section>
      <section style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Image src="/1.png" alt="1" height={500} width={1000}></Image>
        <Image src="/2.png" alt="1" height={500} width={1000}></Image>
        <Image src="/3.png" alt="1" height={500} width={1000}></Image>
      </section>
      <section style={{display:"flex",height:'190px',alignItems:'center',flexDirection:'row',flexWrap:'wrap'}}>
        <div style={{width:"33.3%",border:'solid black 2px',paddingLeft:'12%',fontSize:'30px'}} >
          Available products
        </div>
        <div style={{width:"66.4%",border:'solid black 2px',paddingLeft:'12%',fontSize:'30px'}}>
          images
        </div>
      </section>
      <section>
      <div className="border-2 border-solid border-black text-center font-sans text-3xl py-6">
        <p className="text-3xl">ALL LAPTOP SPARES AVAILABLE</p>
        <p className="text-xl">ALL MAJOR BRANDS LAPTOPS SPARES AVAILABLE AT BEST RATE. HP / DELL / LENOVO / ASUS / ACER / HCL / TOSHIBA</p>
      </div>
      </section>
      
      <section id="laptop_parts" className={styles.laptop_parts}>

        <div id="products" className={styles.laptop_parts_products}>
          <div className="w-1/5 h-1/5">
            product1
          </div>
          <div className="w-1/5 h-1/5">
            product2
          </div>
          <div className="w-1/5 h-1/5">
            product3
          </div>
          <div className="w-1/5 h-1/5">
            product4
          </div>
          <div className="w-1/5 h-1/5">
            product5
          </div>
          <div className="w-1/5 h-1/5">
            product6
          </div>
          <div className="w-1/5 h-1/5">
            product7
          </div>
          <div className="w-1/5 h-1/5">
            product8
          </div>
          <div className="w-1/5 h-1/5">
            product9
          </div>
          <div className="w-1/5 h-1/5">
            product10
          </div>
        </div>

      </section>
      
      </>
  )
}