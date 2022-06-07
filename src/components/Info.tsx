export function Info() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#111111] pb-9">
      <h2 className="text-shadow font-black text-brand-white text-5xl my-9">
        Informações
      </h2>

      <div className="flex gap-20 ">
        <div>
          <img
            src="/assets/owners.jpg"
            alt="Owners Image"
            className="w-60 h-auto border-4 border-solid border-brand-yellow rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-lg shadow-[#00000085]"
          />
        </div>

        <div className="flex flex-col items-center gap-20">
          <div>
            <h3 className="text-2xl text-brand-yellow font-black">
              Redes sociais
            </h3>
            <div className="mt-3 flex items-center justify-evenly">
              <a href="https://www.instagram.com/academiawforte/">
                <img
                  src="/assets/instagram-icon.png"
                  alt="instagramIcon"
                  className="w-10"
                />
              </a>

              <a href="https://www.facebook.com/academiawforte/">
                <img
                  src="/assets/facebook-icon.png"
                  alt="facebookIcon"
                  className="w-10"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl text-brand-yellow font-black">Contatos</h3>
            <div className="text-base text-[#aaaaaa] font-black mt-3">
              Telefone: <a href="tel:+5544998681999">(44) 99868-1999</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h3 className="text-2xl text-brand-yellow font-black">Endereço</h3>
          <span className="text-base text-[#aaaaaa] font-black ">
            R. Maurício Mançano Mago, 37 - Jardim Custodio, Marialva - PR,
            86990-000
          </span>
          <img
            src="/assets/address.png"
            alt="address"
            className="mt-3 border-4 border-solid border-brand-yellow rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
