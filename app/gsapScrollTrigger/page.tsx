"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef(null);

  useGSAP(() => {
    gsap.to("#scroll-down-arrow", {
      y: 30,
      duration: 1,
      repeat: -1,
      yoyo: true,
      opacity: 0.5,
    });
    // @ts-ignore
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box:any) => {
      gsap.to(box, {
        width: "500px",
        height: "500px",
        marginBottom: "20px",
        x: 150,
        borderRadius: "12px",
        duration: 1,
        opacity: 1, 
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 30%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <section className="mt-20">
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <ArrowDown id="scroll-down-arrow" className="text-primary" />
      </div>

      <div ref={scrollRef} className="mt-20 w-full h-screen">
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-full bg-pink-500 opacity-0"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-full bg-orange-500 opacity-0"
        />
      </div>
    </section>
  );
};

export default GsapScrollTrigger;
