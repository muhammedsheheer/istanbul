import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Istanbul<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story2.jpeg"
              width={1109}
              height={1600}
              alt="private dining"
              className="h-auto w-full rounded-lg object-cover md:rounded-none md:h-[600px]"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Located in the lively area of Manchester, our restaurant is a gateway to the rich culinary traditions of Istanbul. Inspired by Turkey’s vibrant flavors and timeless recipes, we bring an authentic dining experience that celebrates the heart of Turkish cuisine. From the bustling spice markets of Istanbul to the warmth of family kitchens, every dish reflects the passion and heritage of our culture.
              <br />
              <br />
              Our menu is a journey through the iconic tastes of Turkey, offering everything from tender, sizzling kebabs to the sweet indulgence of baklava. Paired with warm Turkish hospitality and a cozy, inviting atmosphere, our restaurant is more than a place to eat—it’s a celebration of Istanbul’s charm, right here in Manchester.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
