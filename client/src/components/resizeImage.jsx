import React from "react";
import Resizer from "react-image-file-resizer";

const resizeFile = file =>
    new Promise(resolve => {
    Resizer.imageFileResizer(
        file,
        720,
        450,
        "JPEG",
        100,
        0,
        (uri) => {
        resolve(uri);
        },
        "base64"
    );
});

const resizeCover = file =>
    new Promise(resolve => {
    Resizer.imageFileResizer(
        file,
        504,
        360,
        "JPEG",
        100,
        0,
        (uri) => {
        resolve(uri);
        },
        "base64"
    );
});

export { resizeFile, resizeCover };