export function Info() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#111111] pb-9">
      <h2 className="text-shadow font-black text-brand-white text-xl sm:text-2xl md:text-3xl lg:text-4xl my-7">
        Informações
      </h2>

      <div className="flex flex-col justify-center items-center sm:flex-row gap-10 md:gap-12 lg:gap-16 ">
        <div className="flex-shrink-0">
          <img
            src="/assets/owners.jpg"
            alt="Owners Image"
            className="w-36 border-4 border-solid border-brand-yellow rounded-tl-[2rem] rounded-br-[2rem] shadow-lg shadow-[#00000085]"
          />
        </div>

        <div className="flex flex-col text-center items-center gap-10 sm:gap-16">
          <div>
            <h3 className="text-base lg:text-lg text-brand-yellow font-black">
              Redes sociais
            </h3>
            <div className="mt-2 flex items-center justify-evenly">
              <a href="https://www.instagram.com/academiawforte/">
                <img
                  src="/assets/instagram-icon.png"
                  alt="instagramIcon"
                  className="w-8"
                />
              </a>

              <a href="https://www.facebook.com/academiawforte/">
                <img
                  src="/assets/facebook-icon.png"
                  alt="facebookIcon"
                  className="w-8"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-base lg:text-lg text-brand-yellow font-black">
              Contatos
            </h3>
            <div className="text-xs sm:text-sm text-[#aaaaaa] font-black text-center mt-1">
              Telefone: <a href="tel:+5544998681999">(44) 99868-1999</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h3 className="text-base lg:text-lg text-brand-yellow font-black">
            Endereço
          </h3>
          <span className="text-center text-xs sm:text-sm text-[#aaaaaa] font-black ">
            R. Maurício Mançano Mago, 37 - Jardim Custodio, Marialva - PR,
            86990-000
          </span>
          <a href="https://www.google.com/maps/place/R.+Maurício+Mançano+Mago,+37+-+Jardim+Custodio,+Marialva+-+PR,+86990-000/@-23.487516,-51.7978911,17z/data=!3m1!4b1!4m5!3m4!1s0x94ecc47023412f49:0x374ec035f9d16f0a!8m2!3d-23.487516!4d-51.7978911">
            <img
              src="/assets/address.png"
              alt="address"
              className="w-[20rem] sm:w-[18rem] md:w-[20rem] lg:w-[23rem] mt-2 border-4 border-solid border-brand-yellow rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
