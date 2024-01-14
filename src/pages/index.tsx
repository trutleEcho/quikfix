import Navbar from "@/components/Navbar";
import styles from "../styles/index.module.css"

export default function Main() {
  return(
      <>
      <Navbar>    
      </Navbar>
      <div className={styles.brand_image}> heello</div>
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
            product1
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
      
      </>
  )
}