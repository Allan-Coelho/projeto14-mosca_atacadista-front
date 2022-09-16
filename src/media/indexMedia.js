import media1 from "./media1.jpg";
import media2 from "./media2.jpeg";
import media3 from "./media3.jpeg";
import media4 from "./media4.jpeg";

export const media = [media1, media2, media3, media4, media4, media2];
export const mediaByIndex = index => media[index % media.length];