"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFrom = () => {

  useGSAP(() => {
    gsap.from('#green-box', {
      y: 100,
      opacity: 0,
      // x: 50,
      duration: 1,
      // repeat: -1,
    })
  }, [])
  
  return (
    <section className="mt-20">
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-xl" />
      </div>
    </section>
  );
};

export default GsapFrom;
