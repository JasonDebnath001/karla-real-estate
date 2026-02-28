import React from 'react';

export default function Insights() {
  return (
    <main className="min-h-screen bg-black text-black overflow-x-hidden">
      <section className="bg-[#f3f3f3] w-full pt-8 md:pt-10 pb-16 md:pb-20 px-6 md:px-12 flex justify-center">
        <div className="w-full max-w-[1500px]">
          <div className="relative h-[420px] md:h-[520px]">
            <h1
              className="absolute left-[12%] top-0 m-0 leading-none text-[112px] md:text-[190px] tracking-[-0.05em] font-semibold"
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              Thought
            </h1>

            <h1
              className="absolute left-[42%] top-[170px] md:top-[220px] m-0 leading-[0.9] text-[118px] md:text-[190px] font-normal"
              style={{ fontFamily: 'Italianno, "Times New Roman", serif' }}
            >
              leadership
            </h1>

            <p
              className="absolute left-[12%] top-[255px] md:top-[342px] m-0 uppercase text-[13px] md:text-[13px] tracking-[0.38em] text-[#5d5d5d]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Marketing insights for real estate developers
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black w-full pt-14 md:pt-20 pb-20 px-6 md:px-8">
        <div className="w-full max-w-[1850px] mx-auto">
          <article className="w-[620px] max-w-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Minimal modern house"
              className="w-full h-auto object-cover block"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
