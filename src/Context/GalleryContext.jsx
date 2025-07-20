import { createContext } from "react";
import img01 from "/GalleryPage/01.webp";
import img02 from "/GalleryPage/02.webp";
import img03 from "/GalleryPage/03.webp";
import img04 from "/GalleryPage/04.webp";
import img05 from "/GalleryPage/05.webp";
import img06 from "/GalleryPage/06.webp";
import img07 from "/GalleryPage/07.webp";
import img08 from "/GalleryPage/08.webp";
import img09 from "/GalleryPage/09.webp";
import img10 from "/GalleryPage/10.webp";
import img11 from "/GalleryPage/11.webp";
import img12 from "/GalleryPage/12.webp";
import img13 from "/GalleryPage/13.webp";
import img14 from "/GalleryPage/14.webp";
import img15 from "/GalleryPage/15.webp";
import img16 from "/GalleryPage/16.webp";
import img17 from "/GalleryPage/17.webp";
import img18 from "/GalleryPage/18.webp";
import img19 from "/GalleryPage/19.webp";
import img20 from "/GalleryPage/20.webp";
import img21 from "/GalleryPage/21.webp";
import img22 from "/GalleryPage/22.webp";
import img23 from "/GalleryPage/23.webp";
import img24 from "/GalleryPage/24.webp";
import img25 from "/GalleryPage/25.webp";
import img26 from "/GalleryPage/26.webp";
import img27 from "/GalleryPage/27.webp";
import img28 from "/GalleryPage/28.webp";
import img29 from "/GalleryPage/29.webp";
import img30 from "/GalleryPage/30.webp";
import img31 from "/GalleryPage/31.webp";
import img32 from "/GalleryPage/32.webp";
import img33 from "/GalleryPage/33.webp";
import img34 from "/GalleryPage/34.webp";
import img35 from "/GalleryPage/35.webp";
import img36 from "/GalleryPage/36.webp";
import img37 from "/GalleryPage/37.webp";
import img38 from "/GalleryPage/38.webp";

export const galleryContext = createContext();

export default function GalleryContextProvider({ children }) {
  const galleryImages = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
  ];

  return (
    <galleryContext.Provider value={{ galleryImages }}>
      {children}
    </galleryContext.Provider>
  );
}
