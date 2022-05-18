const addImage = (imgSrc) => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "your image");
    imgElem.src = imgSrc;
    const wrapContainer = document.querySelector(".page");
    wrapContainer.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener("error", () =>
      reject(new Error("Image load is failed..."))
    );

    imgElem.addEventListener("load", onImageLoaded);
  });

  promise.catch((error) => console.log(error));
  return promise;
};
