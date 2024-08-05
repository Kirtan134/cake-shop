import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Bridge from "../components/Icons/Bridge";
import Logo from "../components/Icons/Logo";
import Modal from "../components/Modal";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      {/* <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head> */}
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-pink-100 px-6 pb-16 text-center text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-white to-white"></span>
            </div>
            <Logo />
            <h1 className=" font-pacifico text-3xl ">Homeland Cakes</h1>
            <p className="font-caveat text-3xl ">Freshly Baked</p>
            <p className="max-w-[40ch] text-black/75 sm:max-w-[32ch]">
              Welcome to Homeland Cakes! With over 200 custom cake designs, we
              transform your sweetest dreams into reality. Browse our gallery to
              find inspiration and order directly via WhatsApp for personalized
              service. We use only the finest ingredients to craft cakes that
              taste as good as they look. Let us make your next celebration
              unforgettable with our exquisite creations.
            </p>
            <div className="flex flex-auto">
            <a
                className="pointer z-10 mx-2 mt-6 flex justify-center rounded-full border bg-blue-600  px-2 py-2 font-mono text-white transition hover:bg-white/10 hover:text-white md:mt-4"
                href="https://www.facebook.com/profile.php?id=100064186898710&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mx-2 invert"
                  src="facebook.png"
                  alt=""
                  width="20px"
                />
              </a>
              <a
                className="pointer z-10 mx-2 mt-6 flex justify-evenly rounded-full border bg-green-500 px-3 py-2 font-mono text-white transition hover:bg-white/10 hover:text-white md:mt-4"
                href="https://wa.me/9574626395"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="bold mx-2 invert"
                  src="whatsapp.png"
                  alt=""
                  width="20px"
                />
              </a>
              <a
                className="pointer z-10 mx-2 mt-6 flex justify-evenly rounded-full border bg-slate-400  px-3 py-2 font-mono text-white transition hover:bg-white/10 hover:text-white md:mt-4"
                href="https://maps.app.goo.gl/Acn2LmQdVWy2MdsV8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mx-2 invert"
                  src="location.png"
                  alt=""
                  width="20px"
                />
              </a>
              <a
                className="pointer z-10 mx-2 mt-6 flex justify-evenly rounded-full border bg-blue-400  px-3 py-2 font-mono text-white transition hover:bg-white/10 hover:text-white md:mt-4"
                href="tel:+91-9574626395"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mx-2 invert"
                  src="phone.png"
                  alt=""
                  width="20px"
                />
              </a>
              
            </div>
          </div>
          <div className="my-4 flex text-center justify-center font-caveat text-3xl text-white">
             See Our Creations below
            <img src="arrow.png" className="invert mt-2 h-10 mx-5" alt="" />
          </div>

          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Homeland Cakes"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/t_logo/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        ©️2024{" "}
        <a
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Homeland Cakes,{""}
        </a>
        <a
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        ></a>
        <a
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        ></a>{" "}
        All Rights Reserved.
      </footer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
