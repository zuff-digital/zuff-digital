import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  const linkStyle = "text-lime-green hover:underline"

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-start">
        <StaticImage
          src="../images/zuff-digital.png"
          alt="zuff-digital"
          loading={"eager"}
          width={300}
        />
        <div className="w-400 text-xs leading-[1] selection:bg-black selection:text-white">
          <p>
            i write js & clj @{" "}
            <a
              className={linkStyle}
              href="https://www.yellowdig.co/"
              target="__blank"
              rel="noopener noreferrer"
            >
              yellowdig
            </a>
          </p>
          <p>i appreciate fine art</p>
          <p>(but by 'fine' i mean 'not particularly great')</p>
          <p>i will wreck you at 🎱</p>
          <br />

          <p>
            <a className={linkStyle} href="mailto:zuffidries@gmail.com">
              email
            </a>{" "}
            me :)
          </p>
        </div>
      </div>
    </div>
  )
}
