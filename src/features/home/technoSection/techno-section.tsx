"use client";

import "@/features/home/hero/hero.css";
import { cn } from "cn";
import { useTranslations } from "next-intl";
import { forwardRef, useRef } from "react";
import photoshopImage from "/public/image/photoshop.png";
import chatgptImage from "/public/image/chatgpt.png";
import settingImage from "/public/image/setting.png";
import figmaImage from "/public/image/figma.png";
import Image from "next/image";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { CloudBank } from "@/features/home/hero/components/cloud-bank";
import { SkyBackground } from "@/features/home/hero/components/sky-background";

function TechnoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const img5Ref = useRef<HTMLImageElement>(null);
  const img6Ref = useRef<HTMLImageElement>(null);
  const t = useTranslations("TechnoSection");
  return (
    <div className="relative isolate min-h-screen overflow-hidden px-10 pt-72 pb-24 xl:px-24">
      <SkyBackground />
      <CloudBank />
      <CloudBank position="top" />

      <section className="relative z-10 flex items-center gap-10 lg:gap-0 justify-evenly  flex-col lg:flex-row">
        <div className="flex flex-col gap-2.5 text-[#F7FAFD] max-w-150.25">
          <h2 className="w-fit self-center sm:self-auto py-1.25 px-2.5 border border-[#F7FAFD]/50 rounded-full font-light text-xs text-[#F7FAFD]/50">
            {t("question")}
          </h2>
          <p className="font-medium text-2xl md:text-5xl leading-normal text-center sm:text-left">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="relative isolate inline-block whitespace-nowrap before:absolute before:-inset-x-3 before:inset-y-0 before:-z-10 before:rotate-[-4deg] before:rounded-full before:bg-[#d94f4f]">
                  {chunks}
                </span>
              ),
            })}
          </p>
          <p className="font-light text-xs lg:text-[20px]">
            {t("description")}
          </p>
        </div>
        <div className=" relative lg:w-112.5" ref={containerRef}>
          <div className="flex flex-col gap-5 sm:gap-10">
            <div className="grid grid-cols-3 place-items-center">
              <Square ref={img1Ref} className="col-start-2">
                <Image src={photoshopImage} alt="" />
              </Square>
            </div>
            <div className="grid grid-cols-4 place-items-start">
              <Square ref={img2Ref} className="col-start-2">
                <Image src={photoshopImage} alt="" />
              </Square>
            </div>
            <div className="grid grid-cols-10">
              <Square ref={img3Ref} className="col-start-2">
                <Image src={figmaImage} alt="" />
              </Square>
              <Square
                ref={img4Ref}
                className="col-start-8 rounded-full border-10"
              >
                <Image src={settingImage} alt="" />
              </Square>
            </div>
            <div className="grid grid-cols-4 place-items-start">
              <Square ref={img5Ref} className="col-start-2">
                <Image src={photoshopImage} alt="" />
              </Square>
            </div>
            <div className="grid grid-cols-3 place-items-center">
              <Square ref={img6Ref} className="col-start-2">
                <Image src={chatgptImage} alt="" />
              </Square>
            </div>
          </div>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={img1Ref}
            toRef={img4Ref}
            cornerType="L"
            pathWidth={5}
            pathColor={"#F7FAFD"}
            pathOpacity={1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={img2Ref}
            toRef={img4Ref}
            cornerType="step"
            turnRatio={0.5}
            pathWidth={5}
            pathColor={"#F7FAFD"}
            pathOpacity={1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={img3Ref}
            toRef={img4Ref}
            curvature={0}
            pathWidth={5}
            pathColor={"#F7FAFD"}
            pathOpacity={1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={img5Ref}
            toRef={img4Ref}
            cornerType="step"
            turnRatio={0.5}
            pathWidth={5}
            pathColor={"#F7FAFD"}
            pathOpacity={1}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={img6Ref}
            toRef={img4Ref}
            cornerType="L"
            pathWidth={5}
            pathColor={"#F7FAFD"}
            pathOpacity={1}
          />
        </div>
      </section>
    </div>
  );
}

export default TechnoSection;

const Square = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 sm:size-25 items-center justify-center rounded-2xl border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Square.displayName = "Square";
